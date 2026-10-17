import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowLeft, C as Eye, d as Save, l as Send, p as Pencil, r as Upload, t as X, y as Image } from "../_libs/lucide-react.mjs";
import { n as categories, r as covers } from "./data-DMP_he2M.mjs";
import { n as useBlog } from "./context-BQ6ZyczS.mjs";
import { r as EmptyState } from "./shared-dFqYdAwj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/editor-C3cZy7No.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Editor({ postId }) {
	const { posts, savePost, user } = useBlog();
	const existing = posts.find((p) => p.id === postId);
	const navigate = useNavigate();
	const [title, setTitle] = (0, import_react.useState)(existing?.title ?? "");
	const [excerpt, setExcerpt] = (0, import_react.useState)(existing?.excerpt ?? "");
	const [content, setContent] = (0, import_react.useState)(existing?.content ?? "");
	const [category, setCategory] = (0, import_react.useState)(existing?.category ?? "Lifestyle");
	const [cover, setCover] = (0, import_react.useState)(existing?.cover ?? covers.desk);
	const [coverIsUpload, setCoverIsUpload] = (0, import_react.useState)(false);
	const [preview, setPreview] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	function handleFileUpload(e) {
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
	const [error, setError] = (0, import_react.useState)("");
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		text: "You need to be logged in to write a story.",
		action: {
			label: "Log in",
			to: "/login"
		}
	});
	if (postId && !existing) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { text: "This story isn't available." });
	if (existing && existing.authorId !== user.id) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { text: "You can only edit your own stories." });
	function save(status) {
		if (!title.trim() || !content.trim()) {
			setError("Add a title and some story content before saving.");
			setPreview(false);
			return;
		}
		const post = {
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
			status
		};
		savePost(post);
		navigate({ to: "/dashboard" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-container editor-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "editor-toolbar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dashboard",
					className: "back-link",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), " My stories"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: () => setPreview(!preview),
						children: [preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {}), preview ? "Edit" : "Preview"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => save("draft"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, {}), "Save draft"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => save("published"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {}), "Publish story"]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "editor-heading",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: postId ? "REFINE YOUR PERSPECTIVE" : "A BLANK PAGE. A NEW POSSIBILITY."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: postId ? "Edit your story." : "Tell your story." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "demo-inline",
						children: "Demo workspace · Stories are kept in memory and reset when the page is reloaded."
					})
				]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "form-error",
				role: "alert",
				children: error
			}),
			preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "editor-preview",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cover,
						alt: "Selected story cover",
						width: 1024,
						height: 768
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: title || "Your story title" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "article-excerpt",
						children: excerpt
					}),
					content.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, i))
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "editor-fields",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "field-label",
						children: ["Story title", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "title-input",
							placeholder: "A title worth turning the page for...",
							value: title,
							onChange: (e) => setTitle(e.target.value),
							maxLength: 160
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "field-label",
						children: ["A short introduction", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "excerpt-input",
							placeholder: "Give readers a glimpse of your story...",
							value: excerpt,
							onChange: (e) => setExcerpt(e.target.value),
							maxLength: 300
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "editor-settings",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "field-label",
							children: ["Category", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: category,
								onChange: (e) => setCategory(e.target.value),
								children: categories.slice(1).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "field-label",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { size: 15 }), " Cover image"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "cover-upload-area",
								children: [coverIsUpload ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "cover-upload-preview",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: cover,
										alt: "Uploaded cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "cover-upload-remove",
										onClick: clearUpload,
										"aria-label": "Remove cover",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "cover-upload-btn",
									onClick: () => fileInputRef.current?.click(),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 20 }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Upload cover image" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "cover-upload-hint",
											children: "JPG, PNG, WEBP · max 5 MB"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: fileInputRef,
									type: "file",
									accept: "image/jpeg,image/png,image/webp",
									className: "sr-only",
									onChange: handleFileUpload
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "cover-picker-label",
								children: "Or pick a preset"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "cover-picker",
								children: Object.entries(covers).map(([key, image]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									"aria-label": `Use ${key} cover`,
									"aria-pressed": cover === image,
									onClick: () => {
										setCover(image);
										setCoverIsUpload(false);
									},
									className: !coverIsUpload && cover === image ? "cover-option cover-selected" : "cover-option",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: image,
										alt: key,
										width: 100,
										height: 70
									})
								}, key))
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "field-label",
						children: ["Your story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "content-input",
							placeholder: "Start with a thought. See where it takes you...",
							value: content,
							onChange: (e) => setContent(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "word-count",
						children: [content.trim() ? content.trim().split(/\s+/).length : 0, " words"]
					})
				]
			})
		]
	});
}
//#endregion
export { Editor as t };
