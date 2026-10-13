import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Feather, ArrowUpRight, Pencil, Trash2, Heart, FileText, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBlog } from "@/lib/blog/context";
import { authors, pageHead } from "@/lib/blog/data";
import { Avatar, EmptyState } from "@/components/blog/shared";
export const Route = createFileRoute("/dashboard")({
  head: () => pageHead("Your writing desk"),
  component: Dashboard,
});
function Dashboard() {
  const { user, posts, saved, deletePost } = useBlog();
  const [tab, setTab] = useState("published");
  const [deleting, setDeleting] = useState<string | null>(null);
  const current = user ?? authors[0];
  const own = posts.filter((p) => p.authorId === current.id);
  const list =
    tab === "saved"
      ? posts.filter((p) => saved.includes(p.id) && p.status === "published")
      : own.filter((p) => p.status === tab);
  return (
    <main className="page-container standard-page">
      <div className="dashboard-heading">
        <div>
          <div className="eyebrow">YOUR WRITING DESK</div>
          <h1>A space for your stories.</h1>
          <p>
            Welcome {user ? "back" : "to the demo"}, {current.name.split(" ")[0]}. What’s on your
            mind today?
          </p>
        </div>
        <Button asChild size="lg">
          <Link to="/write">
            <Feather />
            Write a story
          </Link>
        </Button>
      </div>
      <div className="dashboard-profile">
        <Avatar author={current} />
        <div>
          <h3>{current.name}</h3>
          <p className="demo-inline">Demo workspace · Changes reset on reload</p>
        </div>
        <Button variant="ghost" asChild>
          <Link to="/profile/$userId" params={{ userId: current.id }}>
            View profile <ArrowUpRight />
          </Link>
        </Button>
      </div>
      <div className="stats-row">
        <div>
          <FileText />
          <span>{own.filter((p) => p.status === "published").length}</span>
          <p>Published stories</p>
        </div>
        <div>
          <Pencil />
          <span>{own.filter((p) => p.status === "draft").length}</span>
          <p>Work in progress</p>
        </div>
        <div>
          <Heart />
          <span>{own.reduce((n, p) => n + p.likes, 0)}</span>
          <p>Reader appreciations</p>
        </div>
        <div>
          <Bookmark />
          <span>{saved.length}</span>
          <p>Saved stories</p>
        </div>
      </div>
      <div className="dashboard-tabs" aria-label="Story status">
        {["published", "draft", "saved"].map((t) => (
          <Button
            key={t}
            variant="ghost"
            onClick={() => setTab(t)}
            aria-pressed={tab === t}
            className={tab === t ? "dashboard-tab selected-tab" : "dashboard-tab"}
          >
            {t === "published" ? "Published" : t === "draft" ? "Drafts" : "Saved stories"}
            <span>{t === "saved" ? saved.length : own.filter((p) => p.status === t).length}</span>
          </Button>
        ))}
      </div>
      {list.length ? (
        <div className="dashboard-list">
          {list.map((p) => (
            <article key={p.id} className="dashboard-post">
              <img src={p.cover} alt="Story cover" width={160} height={110} />
              <div className="dashboard-post-text">
                <span className="eyebrow">
                  {p.category} <span>·</span> {p.status}
                </span>
                <h3>{p.title}</h3>
                <p>
                  {p.date} <span>·</span> {p.readTime} min read <span>·</span> {p.likes} likes
                </p>
              </div>
              <div className="dashboard-post-actions">
                {p.status === "published" && (
                  <Button variant="ghost" size="icon" asChild title="Read story">
                    <Link
                      aria-label={`Read ${p.title}`}
                      to="/post/$postId"
                      params={{ postId: p.id }}
                    >
                      <ArrowUpRight />
                    </Link>
                  </Button>
                )}
                {tab !== "saved" && (
                  <>
                    <Button variant="ghost" size="icon" asChild title="Edit story">
                      <Link
                        aria-label={`Edit ${p.title}`}
                        to="/edit/$postId"
                        params={{ postId: p.id }}
                      >
                        <Pencil />
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      title="Delete story"
                      aria-label={`Delete ${p.title}`}
                      onClick={() => setDeleting(p.id)}
                    >
                      <Trash2 />
                    </Button>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState
          text={
            tab === "saved" ? "Your reading list is a blank page." : "Your next story starts here."
          }
        />
      )}
      {deleting && (
        <div className="modal-backdrop">
          <div
            className="confirm-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-title"
          >
            <h2 id="delete-title">Delete this story?</h2>
            <p>This will remove it from your demo workspace.</p>
            <div>
              <Button variant="outline" onClick={() => setDeleting(null)}>
                Keep story
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  deletePost(deleting);
                  setDeleting(null);
                }}
              >
                Delete story
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
