import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Bookmark, Heart, Feather, Menu, X, Search, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { authors, type Post, type UserProfile } from "@/lib/blog/data";
import { useBlog } from "@/lib/blog/context";
export function Avatar({ author, small = false }: { author: UserProfile; small?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`avatar avatar-${author.tone} ${small ? "avatar-small" : ""}`}
    >
      {author.initials}
    </span>
  );
}
export function AuthorLine({ post, light = false }: { post: Post; light?: boolean }) {
  const author = authors.find((a) => a.id === post.authorId) ?? (
    post.authorName ? { name: post.authorName, initials: post.authorName.slice(0, 2).toUpperCase(), tone: "violet", role: "BlogSpace member" } : authors[0]
  );
  return (
    <div className={`author-line ${light ? "author-light" : ""}`}>
      <Link to="/profile/$userId" params={{ userId: author.id }}>
        <Avatar author={author} small />
      </Link>
      <div>
        <Link to="/profile/$userId" params={{ userId: author.id }} className="author-name">
          {author.name}
        </Link>
        <div className="author-meta">
          {post.date}
          <span>·</span>
          {post.readTime} min read
        </div>
      </div>
    </div>
  );
}
export function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useBlog();
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">
            <Feather size={21} />
          </span>
          BlogSpace<span className="brand-dot">.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "nav-active" }}>
            Home
          </Link>
          <Link to="/explore" activeProps={{ className: "nav-active" }}>
            Explore
          </Link>
        </nav>
        <div className="nav-actions">
          <Button variant="ghost" size="icon" asChild title="Search stories">
            <Link to="/explore" aria-label="Search stories">
              <Search />
            </Link>
          </Button>
          {user ? (
            <>
              <Link className="desktop-only nav-text" to="/dashboard">
                My stories
              </Link>
              <Button className="desktop-only" variant="ghost" onClick={logout}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Link className="desktop-only nav-text" to="/login">
                Log in
              </Link>
              <Button className="desktop-only signup-nav" variant="outline" asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </>
          )}
          <Button className="write-nav" asChild>
            <Link to="/write">
              <Feather />
              Write a story
            </Link>
          </Button>
          <Button className="desktop-only admin-nav-btn" variant="ghost" asChild>
            <Link to="/admin/login">
              <ShieldCheck size={15} />
              Admin
            </Link>
          </Button>
          <Button
            className="mobile-menu"
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav
          className="mobile-navigation"
          aria-label="Mobile navigation"
          onClick={() => setOpen(false)}
        >
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
          <Link to="/dashboard">My stories</Link>
          <Link to="/profile/$userId" params={{ userId: "emma" }}>
            My profile
          </Link>
          <Link to="/admin/login">Admin panel</Link>
        </nav>
      )}
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <Link to="/" className="brand">
          <Feather size={19} />
          BlogSpace<span className="brand-dot">.</span>
        </Link>
        <span>A little curiosity goes a long way.</span>
        <span className="footer-meta">
          © 2026 BlogSpace <span>·</span> Frontend demo <span>·</span>{" "}
          <Link to="/admin/login" style={{ color: "inherit" }}>Admin</Link>
        </span>
      </div>
    </footer>
  );
}
export function PostCard({ post }: { post: Post }) {
  const { saved, toggleSave } = useBlog();
  return (
    <article className="post-card">
      <Link to="/post/$postId" params={{ postId: post.id }} className="post-image-link">
        <img
          src={post.cover}
          width={1024}
          height={768}
          loading="lazy"
          alt={`${post.category} editorial cover`}
        />
        <span className={`category-label category-${post.category.toLowerCase()}`}>
          {post.category}
        </span>
      </Link>
      <div className="post-card-content">
        <div className="post-title-row">
          <Link to="/post/$postId" params={{ postId: post.id }}>
            <h3>{post.title}</h3>
          </Link>
          <ArrowUpRight size={19} />
        </div>
        <p>{post.excerpt}</p>
        <div className="post-card-bottom">
          <AuthorLine post={post} />
          <Button
            variant="ghost"
            size="icon"
            aria-label={saved.includes(post.id) ? "Unsave story" : "Save story"}
            title="Save story"
            onClick={() => toggleSave(post.id)}
            className={saved.includes(post.id) ? "text-primary" : "text-muted-foreground"}
          >
            <Bookmark fill={saved.includes(post.id) ? "currentColor" : "none"} />
          </Button>
        </div>
      </div>
    </article>
  );
}
export function StoryActions({ post }: { post: Post }) {
  const { liked, saved, toggleLike, toggleSave } = useBlog();
  return (
    <div className="story-actions">
      <Button
        variant="outline"
        onClick={() => toggleLike(post.id)}
        className={liked.includes(post.id) ? "text-primary" : ""}
        aria-label="Like story"
      >
        <Heart fill={liked.includes(post.id) ? "currentColor" : "none"} />
        {post.likes}
      </Button>
      <Button variant="ghost" onClick={() => toggleSave(post.id)}>
        <Bookmark fill={saved.includes(post.id) ? "currentColor" : "none"} />
        {saved.includes(post.id) ? "Saved" : "Save story"}
      </Button>
    </div>
  );
}
export function EmptyState({ text = "No stories found.", action }: { text?: string; action?: { label: string; to: string } }) {
  return (
    <div className="empty-state">
      <Feather />
      <h3>{text}</h3>
      <Button variant="link" asChild>
        <Link to={action?.to ?? "/explore"}>
          {action?.label ?? "Explore stories"} <ArrowRight />
        </Link>
      </Button>
    </div>
  );
}
