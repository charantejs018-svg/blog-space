import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as Feather, i as TrendingUp, k as ArrowRight, s as Sparkles, u as Search } from "../_libs/lucide-react.mjs";
import { n as categories } from "./data-DMP_he2M.mjs";
import { n as useBlog } from "./context-BQ6ZyczS.mjs";
import { o as PostCard, r as EmptyState, t as AuthorLine } from "./shared-dFqYdAwj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/feed-D1lr3H4I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Feed({ explore = false }) {
	const { posts } = useBlog();
	const [category, setCategory] = (0, import_react.useState)("All stories");
	const [search, setSearch] = (0, import_react.useState)("");
	const [limit, setLimit] = (0, import_react.useState)(3);
	const [sort, setSort] = (0, import_react.useState)("latest");
	const featured = posts.find((p) => p.id === "intentional-living");
	const filtered = posts.filter((p) => p.status === "published").filter((p) => (category === "All stories" || p.category === category) && `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(search.toLowerCase()) && (explore || category !== "All stories" || search || p.id !== featured?.id)).sort((a, b) => sort === "popular" ? b.likes - a.likes : 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-container home-page",
		children: [
			explore ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "explore-intro",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 14 }), " FOLLOW YOUR CURIOSITY"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Explore stories." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Fresh perspectives. Unexpected discoveries. Something just for you." })
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "home-intro",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "eyebrow-line" }), " A SPACE FOR STORIES & IDEAS"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
						"Good stories.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "mobile-break" }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Fresh perspectives." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A place for curious minds to read, share, and find a little inspiration." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "intro-bottom",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Discover your next great read." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/write",
							children: ["Share your perspective ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRightIcon, {})]
						})]
					})
				]
			}), featured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "featured-story",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "featured-cover",
						src: featured.cover,
						alt: "Sunlit sculptural architecture with an olive tree",
						width: 1536,
						height: 1024
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "featured-shade" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "featured-top",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 14 }), " THE EDITOR'S PICK"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "featured-count",
							children: ["01 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/ 03" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "featured-content",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "featured-category",
								children: featured.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/post/$postId",
								params: { postId: featured.id },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
									"The quiet art of",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"intentional living"
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: featured.excerpt }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "featured-bottom",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthorLine, {
									post: featured,
									light: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "featured-read",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/post/$postId",
										params: { postId: featured.id },
										children: ["Read the story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
									})
								})]
							})
						]
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "stories-section",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "THE JOURNAL"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [explore ? "Find your next read" : "Stories worth your time", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "heading-dot",
							children: "."
						})] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "sort-control",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { size: 15 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								"aria-label": "Sort stories",
								value: sort,
								onChange: (e) => setSort(e.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "latest",
									children: "Latest stories"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "popular",
									children: "Most loved"
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "filter-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "category-filters",
							"aria-label": "Story categories",
							children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								onClick: () => {
									setCategory(c);
									setLimit(3);
								},
								className: category === c ? "category-filter active-filter" : "category-filter",
								"aria-pressed": category === c,
								children: c
							}, c))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "search-box",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 17 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								"aria-label": "Search stories",
								placeholder: "Search stories...",
								value: search,
								onChange: (e) => {
									setSearch(e.target.value);
									setLimit(3);
								}
							})]
						})]
					}),
					filtered.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "posts-grid",
						children: filtered.slice(0, explore ? Math.max(limit, 6) : limit).map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostCard, { post }, post.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {}),
					!explore && filtered.length > limit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "load-more",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: () => setLimit(limit + 3),
							children: ["More stories ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "community-band",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feather, { size: 14 }), " EVERY VOICE HAS A STORY"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Yours deserves to be heard." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Turn your ideas into something worth sharing." })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/write",
						children: ["Write your first story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})]
			})
		]
	});
}
function ArrowUpRightIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: "15",
		height: "15",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 17 17 7M7 7h10v10" })
	});
}
//#endregion
export { Feed as t };
