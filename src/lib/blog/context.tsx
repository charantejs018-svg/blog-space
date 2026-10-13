import { createContext, useContext, useState, type ReactNode } from "react";
import { authors, initialPosts, type Post, type UserProfile } from "./data";
type BlogState = {
  posts: Post[];
  user: UserProfile | null;
  liked: string[];
  saved: string[];
  toggleLike: (id: string) => void;
  toggleSave: (id: string) => void;
  addComment: (id: string, text: string) => void;
  savePost: (post: Post) => void;
  deletePost: (id: string) => void;
  login: (name?: string) => void;
  logout: () => void;
};
const Context = createContext<BlogState | null>(null);
export function BlogProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState(initialPosts);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [liked, setLiked] = useState<string[]>([]);
  const [saved, setSaved] = useState<string[]>([]);
  const toggleLike = (id: string) => {
    const wasLiked = liked.includes(id);
    setLiked((prev) => (wasLiked ? prev.filter((x) => x !== id) : [...prev, id]));
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, likes: p.likes + (wasLiked ? -1 : 1) } : p)),
    );
  };
  return (
    <Context.Provider
      value={{
        posts,
        user,
        liked,
        saved,
        toggleLike,
        toggleSave: (id) =>
          setSaved((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
        addComment: (id, text) =>
          setPosts((prev) =>
            prev.map((p) =>
              p.id === id
                ? {
                    ...p,
                    comments: [
                      ...p.comments,
                      {
                        id: crypto.randomUUID(),
                        author: user?.name ?? "Guest reader",
                        text,
                        date: "Just now",
                      },
                    ],
                  }
                : p,
            ),
          ),
        savePost: (post) =>
          setPosts((prev) =>
            prev.some((p) => p.id === post.id)
              ? prev.map((p) => (p.id === post.id ? post : p))
              : [post, ...prev],
          ),
        deletePost: (id) => setPosts((prev) => prev.filter((p) => p.id !== id)),
        login: (name) => setUser({ ...authors[0], name: name || authors[0].name }),
        logout: () => setUser(null),
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
