import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { authors, initialPosts, type Post, type UserProfile } from "./data";
import { supabase } from "@/lib/supabase/client";
import * as AuthAPI from "@/lib/supabase/auth";
import * as PostsAPI from "@/lib/supabase/posts";

const isSupabaseConfigured =
  !!import.meta.env["VITE_SUPABASE_URL"] && !!import.meta.env["VITE_SUPABASE_ANON_KEY"];

type BlogState = {
  posts: Post[];
  user: UserProfile | null;
  liked: string[];
  saved: string[];
  loading: boolean;
  toggleLike: (id: string) => void;
  toggleSave: (id: string) => void;
  addComment: (id: string, text: string) => void;
  savePost: (post: Post) => void;
  deletePost: (id: string) => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
};

const Context = createContext<BlogState | null>(null);

export function BlogProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [liked, setLiked] = useState<string[]>([]);
  const [saved, setSaved] = useState<string[]>([]);
  const [loading, setLoading] = useState(isSupabaseConfigured);

  // ── Bootstrap ────────────────────────────────────────────────────────────

  useEffect(() => {
    if (!isSupabaseConfigured) return;

    async function init() {
      try {
        const [fetchedPosts, session] = await Promise.all([
          PostsAPI.fetchPosts(),
          AuthAPI.getSession(),
        ]);
        if (fetchedPosts.length) {
          const fetchedPostIds = new Set(fetchedPosts.map((post) => post.id));
          setPosts([
            ...fetchedPosts,
            ...initialPosts.filter((post) => !fetchedPostIds.has(post.id)),
          ]);
        }
        if (session?.user) {
          setUser(sessionToProfile(session.user));
          const interactions = await PostsAPI.fetchUserInteractions(session.user.id);
          setLiked(interactions.liked);
          setSaved(interactions.saved);
        }
      } finally {
        setLoading(false);
      }
    }

    init();

    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        setUser(sessionToProfile(session.user));
        const interactions = await PostsAPI.fetchUserInteractions(session.user.id);
        setLiked(interactions.liked);
        setSaved(interactions.saved);
      } else {
        setUser(null);
        setLiked([]);
        setSaved([]);
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  // ── Actions ──────────────────────────────────────────────────────────────

  const toggleLike = useCallback(
    (id: string) => {
      const wasLiked = liked.includes(id);
      setLiked((prev) => (wasLiked ? prev.filter((x) => x !== id) : [...prev, id]));
      setPosts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, likes: p.likes + (wasLiked ? -1 : 1) } : p)),
      );
      if (isSupabaseConfigured && user) {
        PostsAPI.toggleLikePost(id, !wasLiked).catch(console.error);
        PostsAPI.toggleInteraction(user.id, id, "like", !wasLiked).catch(console.error);
      }
    },
    [liked, user],
  );

  const toggleSave = useCallback(
    (id: string) => {
      const wasSaved = saved.includes(id);
      setSaved((prev) => (wasSaved ? prev.filter((x) => x !== id) : [...prev, id]));
      if (isSupabaseConfigured && user) {
        PostsAPI.toggleInteraction(user.id, id, "save", !wasSaved).catch(console.error);
      }
    },
    [saved, user],
  );

  const addComment = useCallback(
    (id: string, text: string) => {
      const authorName = user?.name ?? "Guest reader";
      if (isSupabaseConfigured) {
        PostsAPI.addComment(id, text, authorName)
          .then((comment) =>
            setPosts((prev) =>
              prev.map((p) => (p.id === id ? { ...p, comments: [...p.comments, comment] } : p)),
            ),
          )
          .catch(console.error);
      } else {
        setPosts((prev) =>
          prev.map((p) =>
            p.id === id
              ? {
                  ...p,
                  comments: [
                    ...p.comments,
                    { id: crypto.randomUUID(), author: authorName, text, date: "Just now" },
                  ],
                }
              : p,
          ),
        );
      }
    },
    [user],
  );

  const savePost = useCallback(
    (post: Post) => {
      setPosts((prev) =>
        prev.some((p) => p.id === post.id)
          ? prev.map((p) => (p.id === post.id ? post : p))
          : [post, ...prev],
      );
      if (isSupabaseConfigured && user) {
        PostsAPI.upsertPost(post, user.id).catch(console.error);
      }
    },
    [user],
  );

  const deletePost = useCallback(
    (id: string) => {
      setPosts((prev) => prev.filter((p) => p.id !== id));
      if (isSupabaseConfigured) {
        PostsAPI.deletePost(id).catch(console.error);
      }
    },
    [],
  );

  // ── Auth ─────────────────────────────────────────────────────────────────

  const login = useCallback(async (email: string, password: string) => {
    if (!isSupabaseConfigured) {
      setUser({ ...authors[0] });
      return;
    }
    const data = await AuthAPI.signIn(email, password);
    if (data.user) setUser(sessionToProfile(data.user));
  }, []);

  const signup = useCallback(async (email: string, password: string, name: string) => {
    if (!isSupabaseConfigured) {
      setUser({ ...authors[0], name });
      return;
    }
    await AuthAPI.signUp(email, password, name);
    // Supabase may require email confirmation; session set via onAuthStateChange
  }, []);

  const logout = useCallback(async () => {
    if (isSupabaseConfigured) await AuthAPI.signOut();
    setUser(null);
  }, []);

  return (
    <Context.Provider
      value={{
        posts,
        user,
        liked,
        saved,
        loading,
        toggleLike,
        toggleSave,
        addComment,
        savePost,
        deletePost,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useBlog() {
  const value = useContext(Context);
  if (!value) throw new Error("BlogProvider is required");
  return value;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function sessionToProfile(user: any): UserProfile {
  const name: string = user.user_metadata?.name ?? user.email ?? "Reader";
  const initials = name
    .split(" ")
    .map((w: string) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return {
    id: user.id,
    name,
    role: "BlogSpace member",
    bio: "",
    initials,
    tone: "violet",
  };
}
