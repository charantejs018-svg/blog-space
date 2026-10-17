import { supabase } from "./client";
import type { Post, Comment } from "@/lib/blog/data";
import { covers } from "@/lib/blog/data";

// ── Posts ──────────────────────────────────────────────────────────────────

export async function fetchPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("*, comments(*)")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map(dbToPost);
}

export async function fetchPost(id: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from("posts")
    .select("*, comments(*)")
    .eq("id", id)
    .single();
  if (error) return null;
  return dbToPost(data);
}

export async function upsertPost(post: Post, userId: string): Promise<Post> {
  const row = {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    category: post.category,
    cover: coverToKey(post.cover),
    author_id: userId,
    author_name: post.authorName ?? "",
    read_time: post.readTime,
    likes: post.likes,
    status: post.status,
  };
  const { data, error } = await supabase.from("posts").upsert(row).select("*, comments(*)").single();
  if (error) throw error;
  return dbToPost(data);
}

export async function deletePost(id: string) {
  const { error } = await supabase.from("posts").delete().eq("id", id);
  if (error) throw error;
}

export async function toggleLikePost(id: string, increment: boolean) {
  const { error } = await supabase.rpc("increment_likes", { post_id: id, delta: increment ? 1 : -1 });
  if (error) throw error;
}

// ── Comments ───────────────────────────────────────────────────────────────

export async function addComment(postId: string, text: string, authorName: string): Promise<Comment> {
  const { data, error } = await supabase
    .from("comments")
    .insert({ post_id: postId, text, author: authorName })
    .select()
    .single();
  if (error) throw error;
  return { id: data.id, author: data.author, text: data.text, date: formatDate(data.created_at) };
}

// ── Likes / Saves (per-user) ───────────────────────────────────────────────

export async function fetchUserInteractions(userId: string) {
  const { data } = await supabase
    .from("user_interactions")
    .select("post_id, type")
    .eq("user_id", userId);
  const liked: string[] = [];
  const saved: string[] = [];
  for (const row of data ?? []) {
    if (row.type === "like") liked.push(row.post_id);
    if (row.type === "save") saved.push(row.post_id);
  }
  return { liked, saved };
}

export async function toggleInteraction(userId: string, postId: string, type: "like" | "save", active: boolean) {
  if (active) {
    await supabase.from("user_interactions").insert({ user_id: userId, post_id: postId, type });
  } else {
    await supabase.from("user_interactions").delete().match({ user_id: userId, post_id: postId, type });
  }
}

// ── Helpers ────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

/** Map a stored cover value (hashed URL or bare filename) to the imported asset URL. */
function resolveCover(raw: string): string {
  // Already a hashed Vite asset URL — use as-is
  if (!raw || raw.startsWith("http") || raw.startsWith("/assets/")) return raw;
  // Strip any leading path, keep just the filename without extension
  const filename = raw.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "";
  return (covers as Record<string, string>)[filename] ?? raw;
}

/** Convert a cover value (hashed URL or path) to a stable filename key for DB storage. */
function coverToKey(value: string): string {
  const coversMap = covers as Record<string, string>;
  // If it's already a key, return it
  if (coversMap[value]) return value;
  // If it's a hashed URL, find the matching key
  const entry = Object.entries(coversMap).find(([, v]) => v === value);
  if (entry) return entry[0];
  // Fallback: strip path and extension
  return value.split("/").pop()?.replace(/\.[^.]+$/, "") ?? value;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function dbToPost(row: any): Post {
  return {
    id: row.id,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    category: row.category,
    cover: resolveCover(row.cover),
    authorId: row.author_id,
    authorName: row.author_name ?? undefined,
    date: formatDate(row.created_at),
    readTime: row.read_time,
    likes: row.likes ?? 0,
    status: row.status,
    comments: (row.comments ?? []).map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (c: any): Comment => ({
        id: c.id,
        author: c.author,
        text: c.text,
        date: formatDate(c.created_at),
      }),
    ),
  };
}
