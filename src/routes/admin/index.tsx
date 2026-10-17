import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { FileText, Users, Heart, Pencil, Trash2, Eye, ArrowUpRight, Tag, Settings, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { initialPosts, authors, categories as defaultCategories, type Post } from "@/lib/blog/data";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

const TABS = ["overview", "posts", "users", "categories", "settings"] as const;
type Tab = (typeof TABS)[number];

function StatCard({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: React.ElementType;
  label: string;
  value: number | string;
  accent?: string;
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid oklch(0.9 0.005 285)",
        borderRadius: 10,
        padding: "20px 22px",
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <span
        style={{
          display: "grid",
          placeItems: "center",
          width: 42,
          height: 42,
          borderRadius: 9,
          background: accent ?? "oklch(0.94 0.03 295)",
          color: "oklch(0.52 0.22 292)",
          flexShrink: 0,
        }}
      >
        <Icon size={19} />
      </span>
      <div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 26,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {value}
        </div>
        <div style={{ fontSize: 12, color: "oklch(0.52 0.014 285)", marginTop: 4 }}>{label}</div>
      </div>
    </div>
  );
}

function AdminDashboard() {
  const [tab, setTab] = useState<Tab>("overview");
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [cats, setCats] = useState<string[]>(defaultCategories.filter((c) => c !== "All stories"));
  const [newCat, setNewCat] = useState("");
  const [siteName, setSiteName] = useState("BlogSpace");
  const [tagline, setTagline] = useState("A little curiosity goes a long way.");
  const [settingsSaved, setSettingsSaved] = useState(false);

  const published = posts.filter((p) => p.status === "published");
  const drafts = posts.filter((p) => p.status === "draft");
  const totalLikes = posts.reduce((n, p) => n + p.likes, 0);

  function confirmDelete(id: string) {
    setPosts((prev) => prev.filter((p) => p.id !== id));
    setDeletingId(null);
  }

  return (
    <div>
      {/* Page heading */}
      <div style={{ marginBottom: 28 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 650,
            letterSpacing: "1.8px",
            color: "oklch(0.52 0.014 285)",
            marginBottom: 6,
          }}
        >
          ADMIN PANEL
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 28,
            fontWeight: 750,
            margin: 0,
          }}
        >
          BlogSpace overview
        </h1>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 4,
          borderBottom: "1px solid oklch(0.9 0.005 285)",
          marginBottom: 28,
        }}
      >
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: "10px 18px",
              fontSize: 13,
              fontWeight: tab === t ? 600 : 500,
              background: "transparent",
              border: 0,
              borderBottom: tab === t ? "2px solid oklch(0.52 0.22 292)" : "2px solid transparent",
              color: tab === t ? "oklch(0.52 0.22 292)" : "oklch(0.52 0.014 285)",
              cursor: "pointer",
              textTransform: "capitalize",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ── Overview ── */}
      {tab === "overview" && (
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 16,
              marginBottom: 36,
            }}
          >
            <StatCard icon={FileText} label="Published posts" value={published.length} />
            <StatCard icon={Pencil} label="Drafts" value={drafts.length} />
            <StatCard icon={Heart} label="Total likes" value={totalLikes} />
            <StatCard icon={Users} label="Authors" value={authors.length} />
          </div>

          {/* Recent posts */}
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 17,
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            Recent posts
          </h2>
          <PostsTable
            posts={posts.slice(0, 5)}
            onDelete={setDeletingId}
          />
          <button
            onClick={() => setTab("posts")}
            style={{
              marginTop: 14,
              fontSize: 12,
              color: "oklch(0.52 0.22 292)",
              background: "transparent",
              border: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            View all posts <ArrowUpRight size={13} />
          </button>
        </div>
      )}

      {/* ── Posts ── */}
      {tab === "posts" && (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 18,
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 17,
                fontWeight: 700,
                margin: 0,
              }}
            >
              All posts ({posts.length})
            </h2>
            <Button asChild size="sm">
              <Link to="/write">+ New post</Link>
            </Button>
          </div>
          <PostsTable posts={posts} onDelete={setDeletingId} />
        </div>
      )}

      {/* ── Users ── */}
      {tab === "users" && (
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 17,
              fontWeight: 700,
              marginBottom: 18,
            }}
          >
            Authors ({authors.length})
          </h2>
          <div
            style={{
              background: "#fff",
              border: "1px solid oklch(0.9 0.005 285)",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid oklch(0.9 0.005 285)" }}>
                  {["Author", "Role", "Posts", "Total likes"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "12px 16px",
                        textAlign: "left",
                        fontSize: 11,
                        fontWeight: 650,
                        letterSpacing: "0.8px",
                        color: "oklch(0.52 0.014 285)",
                        textTransform: "uppercase",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {authors.map((a) => {
                  const authorPosts = posts.filter((p) => p.authorId === a.id);
                  const likes = authorPosts.reduce((n, p) => n + p.likes, 0);
                  return (
                    <tr
                      key={a.id}
                      style={{ borderBottom: "1px solid oklch(0.95 0.003 285)" }}
                    >
                      <td style={{ padding: "14px 16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span
                            style={{
                              display: "inline-grid",
                              placeItems: "center",
                              width: 34,
                              height: 34,
                              borderRadius: "50%",
                              background: "oklch(0.94 0.03 295)",
                              color: "oklch(0.52 0.22 292)",
                              fontSize: 11,
                              fontWeight: 600,
                              flexShrink: 0,
                            }}
                          >
                            {a.initials}
                          </span>
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 600 }}>{a.name}</div>
                            <Link
                              to="/profile/$userId"
                              params={{ userId: a.id }}
                              style={{ fontSize: 11, color: "oklch(0.52 0.22 292)" }}
                            >
                              View profile ↗
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: "14px 16px", fontSize: 12, color: "oklch(0.52 0.014 285)" }}>
                        {a.role}
                      </td>
                      <td style={{ padding: "14px 16px", fontSize: 13, fontWeight: 600 }}>
                        {authorPosts.length}
                      </td>
                      <td style={{ padding: "14px 16px", fontSize: 13, fontWeight: 600 }}>
                        {likes}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── Categories ── */}
      {tab === "categories" && (
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, margin: 0 }}>
              Categories ({cats.length})
            </h2>
          </div>
          <div style={{ background: "#fff", border: "1px solid oklch(0.9 0.005 285)", borderRadius: 10, padding: 20, marginBottom: 20 }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const trimmed = newCat.trim();
                if (trimmed && !cats.includes(trimmed)) {
                  setCats((prev) => [...prev, trimmed]);
                  setNewCat("");
                }
              }}
              style={{ display: "flex", gap: 10 }}
            >
              <input
                value={newCat}
                onChange={(e) => setNewCat(e.target.value)}
                placeholder="New category name"
                style={{
                  flex: 1,
                  padding: "9px 13px",
                  border: "1px solid oklch(0.9 0.005 285)",
                  borderRadius: 6,
                  fontSize: 13,
                  background: "oklch(0.985 0.003 85)",
                }}
              />
              <Button type="submit" size="sm">
                <Plus size={14} /> Add
              </Button>
            </form>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {cats.map((cat) => {
              const count = posts.filter((p) => p.category === cat).length;
              return (
                <div
                  key={cat}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 14px",
                    background: "#fff",
                    border: "1px solid oklch(0.9 0.005 285)",
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  <Tag size={13} style={{ color: "oklch(0.52 0.22 292)" }} />
                  {cat}
                  <span style={{ fontSize: 11, color: "oklch(0.52 0.014 285)", marginLeft: 2 }}>
                    {count} post{count !== 1 ? "s" : ""}
                  </span>
                  <button
                    onClick={() => setCats((prev) => prev.filter((c) => c !== cat))}
                    style={{ background: "transparent", border: 0, cursor: "pointer", color: "oklch(0.65 0.01 285)", padding: 0, display: "grid", placeItems: "center" }}
                    aria-label={`Remove ${cat}`}
                  >
                    <X size={13} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Settings ── */}
      {tab === "settings" && (
        <div style={{ maxWidth: 520 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, marginBottom: 22 }}>
            Site settings
          </h2>
          <div style={{ background: "#fff", border: "1px solid oklch(0.9 0.005 285)", borderRadius: 10, padding: 28, display: "flex", flexDirection: "column", gap: 20 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 550 }}>
              Site name
              <input
                value={siteName}
                onChange={(e) => { setSiteName(e.target.value); setSettingsSaved(false); }}
                style={{
                  display: "block",
                  marginTop: 8,
                  width: "100%",
                  padding: "10px 13px",
                  border: "1px solid oklch(0.9 0.005 285)",
                  borderRadius: 6,
                  fontSize: 13,
                  background: "oklch(0.985 0.003 85)",
                  boxSizing: "border-box",
                }}
              />
            </label>
            <label style={{ display: "block", fontSize: 13, fontWeight: 550 }}>
              Tagline
              <input
                value={tagline}
                onChange={(e) => { setTagline(e.target.value); setSettingsSaved(false); }}
                style={{
                  display: "block",
                  marginTop: 8,
                  width: "100%",
                  padding: "10px 13px",
                  border: "1px solid oklch(0.9 0.005 285)",
                  borderRadius: 6,
                  fontSize: 13,
                  background: "oklch(0.985 0.003 85)",
                  boxSizing: "border-box",
                }}
              />
            </label>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Button
                onClick={() => setSettingsSaved(true)}
                size="sm"
              >
                Save changes
              </Button>
              {settingsSaved && (
                <span style={{ fontSize: 12, color: "oklch(0.4 0.09 155)" }}>
                  ✓ Saved (local state only)
                </span>
              )}
            </div>
          </div>
          <div style={{ marginTop: 24, background: "#fff", border: "1px solid oklch(0.9 0.005 285)", borderRadius: 10, padding: 28 }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, margin: "0 0 14px" }}>
              Admin credentials
            </h3>
            <p style={{ fontSize: 12, color: "oklch(0.52 0.014 285)", lineHeight: 1.7, margin: 0 }}>
              Email: <strong>admin@blogspace.com</strong><br />
              Password: <strong>admin123</strong><br />
              <span style={{ marginTop: 6, display: "block" }}>These are demo credentials stored in local session only.</span>
            </p>
          </div>
        </div>
      )}

      {/* Delete confirm modal */}
      {deletingId && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "oklch(0.13 0.008 285 / 50%)",
            display: "grid",
            placeItems: "center",
            zIndex: 60,
            padding: 24,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: 30,
              borderRadius: 10,
              maxWidth: 380,
              width: "100%",
              boxShadow: "0 16px 60px oklch(0.1 0 0 / 18%)",
            }}
          >
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 10px" }}>
              Delete this post?
            </h2>
            <p style={{ fontSize: 13, color: "oklch(0.52 0.014 285)", lineHeight: 1.7 }}>
              This will remove it from the admin view. Changes reset on reload.
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 22 }}>
              <Button variant="outline" onClick={() => setDeletingId(null)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={() => confirmDelete(deletingId)}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PostsTable({
  posts,
  onDelete,
}: {
  posts: Post[];
  onDelete: (id: string) => void;
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid oklch(0.9 0.005 285)",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid oklch(0.9 0.005 285)" }}>
            {["Title", "Category", "Status", "Likes", "Actions"].map((h) => (
              <th
                key={h}
                style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  fontSize: 11,
                  fontWeight: 650,
                  letterSpacing: "0.8px",
                  color: "oklch(0.52 0.014 285)",
                  textTransform: "uppercase",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id} style={{ borderBottom: "1px solid oklch(0.95 0.003 285)" }}>
              <td style={{ padding: "13px 16px", maxWidth: 280 }}>
                <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.4 }}>{p.title}</div>
                <div style={{ fontSize: 11, color: "oklch(0.52 0.014 285)", marginTop: 2 }}>
                  {p.date} · {p.readTime} min
                </div>
              </td>
              <td style={{ padding: "13px 16px" }}>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    padding: "3px 8px",
                    borderRadius: 4,
                    background: "oklch(0.94 0.03 295)",
                    color: "oklch(0.52 0.22 292)",
                  }}
                >
                  {p.category}
                </span>
              </td>
              <td style={{ padding: "13px 16px" }}>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    padding: "3px 8px",
                    borderRadius: 4,
                    background:
                      p.status === "published"
                        ? "oklch(0.93 0.04 155)"
                        : "oklch(0.94 0.06 75)",
                    color:
                      p.status === "published"
                        ? "oklch(0.4 0.09 155)"
                        : "oklch(0.46 0.09 65)",
                  }}
                >
                  {p.status}
                </span>
              </td>
              <td style={{ padding: "13px 16px", fontSize: 13, fontWeight: 600 }}>{p.likes}</td>
              <td style={{ padding: "13px 16px" }}>
                <div style={{ display: "flex", gap: 4 }}>
                  {p.status === "published" && (
                    <Button variant="ghost" size="icon" asChild title="View post">
                      <Link to="/post/$postId" params={{ postId: p.id }}>
                        <Eye size={15} />
                      </Link>
                    </Button>
                  )}
                  <Button variant="ghost" size="icon" asChild title="Edit post">
                    <Link to="/edit/$postId" params={{ postId: p.id }}>
                      <Pencil size={15} />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    title="Delete post"
                    onClick={() => onDelete(p.id)}
                    style={{ color: "oklch(0.577 0.245 27.325)" }}
                  >
                    <Trash2 size={15} />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
