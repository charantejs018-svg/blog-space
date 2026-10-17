import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowLeft, l as Send, m as MessageCircle, p as Pencil } from "../_libs/lucide-react.mjs";
import { t as authors } from "./data-DMP_he2M.mjs";
import { n as useBlog } from "./context-BQ6ZyczS.mjs";
import { n as Avatar, o as PostCard, r as EmptyState, s as StoryActions, t as AuthorLine } from "./shared-dFqYdAwj.mjs";
import { t as Route } from "./post._postId-5slEaylx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/post._postId-CLbpntY1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Article() {
	const { postId } = Route.useParams();
	const { posts, addComment, user } = useBlog();
	const post = posts.find((p) => p.id === postId && p.status === "published");
	const [comment, setComment] = (0, import_react.useState)("");
	if (!post) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "page-container standard-page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { text: "This story isn't available." })
	});
	const author = authors.find((a) => a.id === post.authorId) ?? authors[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-container article-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/explore",
				className: "back-link",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), " Back to stories"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "article-header",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `category-label category-${post.category.toLowerCase()}`,
						children: post.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: post.title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "article-excerpt",
						children: post.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "article-header-bottom",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthorLine, { post }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryActions, { post })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "article-cover",
				src: post.cover,
				width: 1536,
				height: 1024,
				alt: `${post.category} story cover`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "article-body",
				children: [
					post.content.split("\n\n").map((paragraph, i) => paragraph.length < 70 && i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: paragraph }, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "article-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryActions, { post }), user?.id === post.authorId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/edit/$postId",
								params: { postId: post.id },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {}), "Edit story"]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "author-bio",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, { author }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "WRITTEN BY"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/profile/$userId",
								params: { userId: author.id },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: author.name })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: author.bio })
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "comments-section",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 22 }),
								" The conversation ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"(",
									post.comments.length,
									")"
								] })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: (e) => {
									e.preventDefault();
									if (!comment.trim()) return;
									addComment(post.id, comment.trim());
									setComment("");
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "comment",
										children: "Add your perspective"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "comment",
										placeholder: "What resonated with you?",
										value: comment,
										onChange: (e) => setComment(e.target.value),
										required: true,
										maxLength: 2e3
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "comment-submit",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [user ? `Commenting as ${user.name}` : "Commenting as Guest reader", " · Demo comments"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "submit",
											disabled: !comment.trim(),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {}), "Post comment"]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-live": "polite",
								children: post.comments.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "comment",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "avatar avatar-violet avatar-small",
										children: c.author.split(" ").map((x) => x[0]).slice(0, 2).join("")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", { children: [c.author, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.date })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: c.text })] })]
								}, c.id))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "related-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "section-heading",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Keep your curiosity going." })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "posts-grid",
					children: posts.filter((p) => p.status === "published" && p.id !== post.id).slice(0, 3).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostCard, { post: p }, p.id))
				})]
			})
		]
	});
}
//#endregion
export { Article as component };
