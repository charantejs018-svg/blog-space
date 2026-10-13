import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, MessageCircle, Send, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBlog } from "@/lib/blog/context";
import { authors, initialPosts, pageHead } from "@/lib/blog/data";
import { AuthorLine, Avatar, EmptyState, PostCard, StoryActions } from "@/components/blog/shared";
export const Route = createFileRoute("/post/$postId")({
  head: ({ params }) =>
    pageHead(initialPosts.find((p) => p.id === params.postId)?.title ?? "Read a story"),
  component: Article,
});
function Article() {
  const { postId } = Route.useParams();
  const { posts, addComment, user } = useBlog();
  const post = posts.find((p) => p.id === postId && p.status === "published");
  const [comment, setComment] = useState("");
  if (!post)
    return (
      <main className="page-container standard-page">
        <EmptyState text="This story isn't available." />
      </main>
    );
  const author = authors.find((a) => a.id === post.authorId) ?? authors[0];
  return (
    <main className="page-container article-page">
      <Link to="/explore" className="back-link">
        <ArrowLeft size={16} /> Back to stories
      </Link>
      <header className="article-header">
        <span className={`category-label category-${post.category.toLowerCase()}`}>
          {post.category}
        </span>
        <h1>{post.title}</h1>
        <p className="article-excerpt">{post.excerpt}</p>
        <div className="article-header-bottom">
          <AuthorLine post={post} />
          <StoryActions post={post} />
        </div>
      </header>
      <img
        className="article-cover"
        src={post.cover}
        width={1536}
        height={1024}
        alt={`${post.category} story cover`}
      />
      <div className="article-body">
        {post.content
          .split("\n\n")
          .map((paragraph, i) =>
            paragraph.length < 70 && i > 0 ? (
              <h2 key={i}>{paragraph}</h2>
            ) : (
              <p key={i}>{paragraph}</p>
            ),
          )}
        <div className="article-end">
          <StoryActions post={post} />
          {user?.id === post.authorId && (
            <Button variant="ghost" asChild>
              <Link to="/edit/$postId" params={{ postId: post.id }}>
                <Pencil />
                Edit story
              </Link>
            </Button>
          )}
        </div>
        <div className="author-bio">
          <Avatar author={author} />
          <div>
            <span className="eyebrow">WRITTEN BY</span>
            <Link to="/profile/$userId" params={{ userId: author.id }}>
              <h3>{author.name}</h3>
            </Link>
            <p>{author.bio}</p>
          </div>
        </div>
        <section className="comments-section">
          <h2>
            <MessageCircle size={22} /> The conversation <span>({post.comments.length})</span>
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!comment.trim()) return;
              addComment(post.id, comment.trim());
              setComment("");
            }}
          >
            <label htmlFor="comment">Add your perspective</label>
            <textarea
              id="comment"
              placeholder="What resonated with you?"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              maxLength={2000}
            />
            <div className="comment-submit">
              <span>
                {user ? `Commenting as ${user.name}` : "Commenting as Guest reader"} · Demo comments
              </span>
              <Button type="submit" disabled={!comment.trim()}>
                <Send />
                Post comment
              </Button>
            </div>
          </form>
          <div aria-live="polite">
            {post.comments.map((c) => (
              <div className="comment" key={c.id}>
                <span className="avatar avatar-violet avatar-small">
                  {c.author
                    .split(" ")
                    .map((x) => x[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div>
                  <h4>
                    {c.author}
                    <span>{c.date}</span>
                  </h4>
                  <p>{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="related-section">
        <div className="section-heading">
          <h2>Keep your curiosity going.</h2>
        </div>
        <div className="posts-grid">
          {posts
            .filter((p) => p.status === "published" && p.id !== post.id)
            .slice(0, 3)
            .map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
        </div>
      </section>
    </main>
  );
}
