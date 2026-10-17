import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Bookmark, O as ArrowUpRight, S as Feather, a as Trash2, b as Heart, p as Pencil, x as FileText } from "../_libs/lucide-react.mjs";
import { t as authors } from "./data-DMP_he2M.mjs";
import { n as useBlog } from "./context-BQ6ZyczS.mjs";
import { n as Avatar, r as EmptyState } from "./shared-dFqYdAwj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-CIV8H59M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	const { user, posts, saved, deletePost } = useBlog();
	const [tab, setTab] = (0, import_react.useState)("published");
	const [deleting, setDeleting] = (0, import_react.useState)(null);
	const current = user ?? authors[0];
	const own = posts.filter((p) => p.authorId === current.id);
	const list = tab === "saved" ? posts.filter((p) => saved.includes(p.id) && p.status === "published") : own.filter((p) => p.status === tab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-container standard-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dashboard-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "YOUR WRITING DESK"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "A space for your stories." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Welcome ",
						user ? "back" : "to the demo",
						", ",
						current.name.split(" ")[0],
						". What’s on your mind today?"
					] })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/write",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feather, {}), "Write a story"]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dashboard-profile",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, { author: current }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: current.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "demo-inline",
						children: "Demo workspace · Changes reset on reload"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/profile/$userId",
							params: { userId: current.id },
							children: ["View profile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stats-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: own.filter((p) => p.status === "published").length }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Published stories" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: own.filter((p) => p.status === "draft").length }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Work in progress" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: own.reduce((n, p) => n + p.likes, 0) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Reader appreciations" })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: saved.length }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Saved stories" })
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "dashboard-tabs",
				"aria-label": "Story status",
				children: [
					"published",
					"draft",
					"saved"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					onClick: () => setTab(t),
					"aria-pressed": tab === t,
					className: tab === t ? "dashboard-tab selected-tab" : "dashboard-tab",
					children: [t === "published" ? "Published" : t === "draft" ? "Drafts" : "Saved stories", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t === "saved" ? saved.length : own.filter((p) => p.status === t).length })]
				}, t))
			}),
			list.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "dashboard-list",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "dashboard-post",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.cover,
							alt: "Story cover",
							width: 160,
							height: 110
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dashboard-post-text",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "eyebrow",
									children: [
										p.category,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
										" ",
										p.status
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: p.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									p.date,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
									" ",
									p.readTime,
									" min read ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
									" ",
									p.likes,
									" likes"
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dashboard-post-actions",
							children: [p.status === "published" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								asChild: true,
								title: "Read story",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									"aria-label": `Read ${p.title}`,
									to: "/post/$postId",
									params: { postId: p.id },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})
								})
							}), tab !== "saved" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								asChild: true,
								title: "Edit story",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									"aria-label": `Edit ${p.title}`,
									to: "/edit/$postId",
									params: { postId: p.id },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								title: "Delete story",
								"aria-label": `Delete ${p.title}`,
								onClick: () => setDeleting(p.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
							})] })]
						})
					]
				}, p.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { text: tab === "saved" ? "Your reading list is a blank page." : "Your next story starts here." }),
			deleting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "modal-backdrop",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "confirm-dialog",
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "delete-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "delete-title",
							children: "Delete this story?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This will remove it from your demo workspace." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setDeleting(null),
							children: "Keep story"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "destructive",
							onClick: () => {
								deletePost(deleting);
								setDeleting(null);
							},
							children: "Delete story"
						})] })
					]
				})
			})
		]
	});
}
//#endregion
export { Dashboard as component };
