import { useState, useRef } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Send, Save, Image, Eye, Pencil, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, covers, type Post } from "@/lib/blog/data";
import { useBlog } from "@/lib/blog/context";
import { EmptyState } from "./shared";
export function Editor({ postId }: { postId?: string }) {
  const { posts, savePost, user } = useBlog();
  const existing = posts.find((p) => p.id === postId);
  const navigate = useNavigate();
  const [title, setTitle] = useState(existing?.title ?? "");
  const [excerpt, setExcerpt] = useState(existing?.excerpt ?? "");
  const [content, setContent] = useState(existing?.content ?? "");
  const [category, setCategory] = useState(existing?.category ?? "Lifestyle");
  const [cover, setCover] = useState(existing?.cover ?? covers.desk);
  const [coverIsUpload, setCoverIsUpload] = useState(false);
  const [preview, setPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setCover(url);
    setCoverIsUpload(true);
  }

  function clearUpload() {
    setCover(covers.desk);
    setCoverIsUpload(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }
  const [error, setError] = useState("");
  if (!user) return <EmptyState text="You need to be logged in to write a story." action={{ label: "Log in", to: "/login" }} />;
  if (postId && !existing) return <EmptyState text="This story isn't available." />;
  if (existing && existing.authorId !== user.id)
    return <EmptyState text="You can only edit your own stories." />;
  function save(status: Post["status"]) {
    if (!title.trim() || !content.trim()) {
      setError("Add a title and some story content before saving.");
      setPreview(false);
      return;
    }
    const post: Post = {
      id: existing?.id ?? `story-${crypto.randomUUID()}`,
      title: title.trim(),
      excerpt: excerpt.trim() || content.trim().slice(0, 140),
      content: content.trim(),
      category,
      cover,
      authorId: user.id,
      authorName: user.name,
      date: existing?.date ?? "Oct 13, 2026",
      readTime: Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200)),
      likes: existing?.likes ?? 0,
      comments: existing?.comments ?? [],
      status,
    };
    savePost(post);
    navigate({ to: "/dashboard" });
  }
  return (
    <main className="page-container editor-page">
      <div className="editor-toolbar">
        <Link to="/dashboard" className="back-link">
          <ArrowLeft size={16} /> My stories
        </Link>
        <div>
          <Button variant="ghost" onClick={() => setPreview(!preview)}>
            {preview ? <Pencil /> : <Eye />}
            {preview ? "Edit" : "Preview"}
          </Button>
          <Button variant="outline" onClick={() => save("draft")}>
            <Save />
            Save draft
          </Button>
          <Button onClick={() => save("published")}>
            <Send />
            Publish story
          </Button>
        </div>
      </div>
      <div className="editor-heading">
        <div className="eyebrow">
          {postId ? "REFINE YOUR PERSPECTIVE" : "A BLANK PAGE. A NEW POSSIBILITY."}
        </div>
        <h1>{postId ? "Edit your story." : "Tell your story."}</h1>
        <p className="demo-inline">
          Demo workspace · Stories are kept in memory and reset when the page is reloaded.
        </p>
      </div>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      {preview ? (
        <article className="editor-preview">
          <img src={cover} alt="Selected story cover" width={1024} height={768} />
          <span className="eyebrow">{category}</span>
          <h1>{title || "Your story title"}</h1>
          <p className="article-excerpt">{excerpt}</p>
          {content.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
      ) : (
        <div className="editor-fields">
          <label className="field-label">
            Story title
            <input
              className="title-input"
              placeholder="A title worth turning the page for..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={160}
            />
          </label>
          <label className="field-label">
            A short introduction
            <textarea
              className="excerpt-input"
              placeholder="Give readers a glimpse of your story..."
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              maxLength={300}
            />
          </label>
          <div className="editor-settings">
            <label className="field-label">
              Category
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.slice(1).map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <div>
              <span className="field-label">
                <Image size={15} /> Cover image
              </span>
              <div className="cover-upload-area">
                {coverIsUpload ? (
                  <div className="cover-upload-preview">
                    <img src={cover} alt="Uploaded cover" />
                    <button className="cover-upload-remove" onClick={clearUpload} aria-label="Remove cover">
                      <X size={14} />
                    </button>
                  </div>
                ) : (
                  <button className="cover-upload-btn" onClick={() => fileInputRef.current?.click()}>
                    <Upload size={20} />
                    <span>Upload cover image</span>
                    <span className="cover-upload-hint">JPG, PNG, WEBP · max 5 MB</span>
                  </button>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="sr-only"
                  onChange={handleFileUpload}
                />
              </div>
              <div className="cover-picker-label">Or pick a preset</div>
              <div className="cover-picker">
                {Object.entries(covers).map(([key, image]) => (
                  <Button
                    key={key}
                    variant="ghost"
                    aria-label={`Use ${key} cover`}
                    aria-pressed={cover === image}
                    onClick={() => { setCover(image); setCoverIsUpload(false); }}
                    className={!coverIsUpload && cover === image ? "cover-option cover-selected" : "cover-option"}
                  >
                    <img src={image} alt={key} width={100} height={70} />
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <label className="field-label">
            Your story
            <textarea
              className="content-input"
              placeholder="Start with a thought. See where it takes you..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <div className="word-count">
            {content.trim() ? content.trim().split(/\s+/).length : 0} words
          </div>
        </div>
      )}
    </main>
  );
}
