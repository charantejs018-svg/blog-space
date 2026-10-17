import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Search, Sparkles, TrendingUp, Feather } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/blog/data";
import { useBlog } from "@/lib/blog/context";
import { AuthorLine, EmptyState, PostCard } from "./shared";
export function Feed({ explore = false }: { explore?: boolean }) {
  const { posts } = useBlog();
  const [category, setCategory] = useState("All stories");
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(3);
  const [sort, setSort] = useState("latest");
  const featured = posts.find((p) => p.id === "intentional-living");
  const published = posts.filter((p) => p.status === "published");
  const filtered = published
    .filter(
      (p) =>
        (category === "All stories" || p.category === category) &&
        `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(search.toLowerCase()) &&
        (explore || category !== "All stories" || search || p.id !== featured?.id),
    )
    .sort((a, b) =>
      sort === "popular" ? b.likes - a.likes : Date.parse(b.date) - Date.parse(a.date),
    );
  return (
    <main className="page-container home-page">
      {explore ? (
        <section className="explore-intro">
          <div className="eyebrow">
            <Sparkles size={14} /> FOLLOW YOUR CURIOSITY
          </div>
          <h1>Explore stories.</h1>
          <p>Fresh perspectives. Unexpected discoveries. Something just for you.</p>
        </section>
      ) : (
        <>
          <section className="home-intro">
            <div className="eyebrow">
              <span className="eyebrow-line" /> A SPACE FOR STORIES & IDEAS
            </div>
            <h1>
              Good stories.
              <br className="mobile-break" /> <span>Fresh perspectives.</span>
            </h1>
            <p>A place for curious minds to read, share, and find a little inspiration.</p>
            <div className="intro-bottom">
              <span>Discover your next great read.</span>
              <Link to="/write">
                Share your perspective <ArrowUpRightIcon />
              </Link>
            </div>
          </section>
          {featured && (
            <section className="featured-story">
              <img
                className="featured-cover"
                src={featured.cover}
                alt="Sunlit sculptural architecture with an olive tree"
                width={1536}
                height={1024}
              />
              <div className="featured-shade" />
              <div className="featured-top">
                <span>
                  <Sparkles size={14} /> THE EDITOR'S PICK
                </span>
                <span className="featured-count">
                  01 <span>/ 03</span>
                </span>
              </div>
              <div className="featured-content">
                <span className="featured-category">{featured.category}</span>
                <Link to="/post/$postId" params={{ postId: featured.id }}>
                  <h2>
                    The quiet art of
                    <br />
                    intentional living
                  </h2>
                </Link>
                <p>{featured.excerpt}</p>
                <div className="featured-bottom">
                  <AuthorLine post={featured} light />
                  <Button asChild variant="outline" className="featured-read">
                    <Link to="/post/$postId" params={{ postId: featured.id }}>
                      Read the story <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          )}
        </>
      )}
      <section className="stories-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">THE JOURNAL</div>
            <h2>
              {explore ? "Find your next read" : "Stories worth your time"}
              <span className="heading-dot">.</span>
            </h2>
          </div>
          <label className="sort-control">
            <TrendingUp size={15} />
            <select
              aria-label="Sort stories"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="latest">Latest stories</option>
              <option value="popular">Most loved</option>
            </select>
          </label>
        </div>
        <div className="filter-row">
          <div className="category-filters" aria-label="Story categories">
            {categories.map((c) => (
              <Button
                variant="ghost"
                key={c}
                onClick={() => {
                  setCategory(c);
                  setLimit(3);
                }}
                className={category === c ? "category-filter active-filter" : "category-filter"}
                aria-pressed={category === c}
              >
                {c}
              </Button>
            ))}
          </div>
          <label className="search-box">
            <Search size={17} />
            <input
              aria-label="Search stories"
              placeholder="Search stories..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setLimit(3);
              }}
            />
          </label>
        </div>
        {filtered.length ? (
          <div className="posts-grid">
            {filtered.slice(0, explore ? Math.max(limit, 6) : limit).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
        {!explore && filtered.length > limit && (
          <div className="load-more">
            <Button variant="outline" onClick={() => setLimit(limit + 3)}>
              More stories <ArrowRight />
            </Button>
          </div>
        )}
      </section>
      <section className="community-band">
        <div>
          <div className="eyebrow">
            <Feather size={14} /> EVERY VOICE HAS A STORY
          </div>
          <h2>Yours deserves to be heard.</h2>
          <p>Turn your ideas into something worth sharing.</p>
        </div>
        <Button asChild size="lg">
          <Link to="/write">
            Write your first story <ArrowRight />
          </Link>
        </Button>
      </section>
    </main>
  );
}
function ArrowUpRightIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}
