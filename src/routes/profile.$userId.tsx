import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, MapPin, Feather, Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { authors, pageHead } from "@/lib/blog/data";
import { useBlog } from "@/lib/blog/context";
import { Avatar, EmptyState, PostCard } from "@/components/blog/shared";
export const Route = createFileRoute("/profile/$userId")({
  head: ({ params }) =>
    pageHead(`${authors.find((a) => a.id === params.userId)?.name ?? "Writer"} — Profile`),
  component: Profile,
});
function Profile() {
  const { userId } = Route.useParams();
  const { posts, user } = useBlog();
  const author = authors.find((a) => a.id === userId);
  const [following, setFollowing] = useState(false);
  if (!author) return <EmptyState text="This writer isn't available." />;
  const stories = posts.filter((p) => p.authorId === userId && p.status === "published");
  const display = user?.id === author.id ? user : author;
  return (
    <main className="page-container standard-page profile-page">
      <Link to="/explore" className="back-link">
        <ArrowLeft size={16} /> Back to stories
      </Link>
      <section className="profile-header">
        <Avatar author={display} />
        <div className="eyebrow">MEET THE WRITER</div>
        <h1>{display.name}</h1>
        <p className="profile-role">{display.role}</p>
        <p className="profile-bio">{display.bio}</p>
        <div className="profile-meta">
          <span>
            <MapPin size={15} /> Copenhagen, Denmark
          </span>
          <span>
            <Feather size={15} /> Joined September 2026
          </span>
        </div>
        <div className="profile-stats">
          <span>
            <strong>{stories.length}</strong> stories
          </span>
          <span>
            <strong>{stories.reduce((n, p) => n + p.likes, 0)}</strong> appreciations
          </span>
        </div>
        {userId === (user?.id ?? "emma") ? (
          <Button variant="outline" asChild>
            <Link to="/dashboard">My writing desk</Link>
          </Button>
        ) : (
          <Button
            variant={following ? "outline" : "default"}
            onClick={() => setFollowing(!following)}
          >
            {following ? <Check /> : <Plus />}
            {following ? "Following" : "Follow writer"}
          </Button>
        )}
      </section>
      <div className="section-heading">
        <h2>
          Stories by {display.name.split(" ")[0]}
          <span className="heading-dot">.</span>
        </h2>
      </div>
      <div className="posts-grid">
        {stories.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </main>
  );
}
