import { supabase } from "./client";
import type { Post, Comment } from "@/lib/blog/data";

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
    cover: post.cover,
    author_id: userId,
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function dbToPost(row: any): Post {
  return {
    id: row.id,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    category: row.category,
    cover: row.cover,
    authorId: row.author_id,
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
