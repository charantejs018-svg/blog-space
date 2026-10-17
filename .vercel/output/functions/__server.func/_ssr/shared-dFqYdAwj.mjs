import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Bookmark, O as ArrowUpRight, S as Feather, b as Heart, c as ShieldCheck, h as Menu, k as ArrowRight, t as X, u as Search } from "../_libs/lucide-react.mjs";
import { t as authors } from "./data-DMP_he2M.mjs";
import { n as useBlog } from "./context-BQ6ZyczS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shared-dFqYdAwj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Avatar({ author, small = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		className: `avatar avatar-${author.tone} ${small ? "avatar-small" : ""}`,
		children: author.initials
	});
}
function AuthorLine({ post, light = false }) {
	const author = authors.find((a) => a.id === post.authorId) ?? (post.authorName ? {
		name: post.authorName,
		initials: post.authorName.slice(0, 2).toUpperCase(),
		tone: "violet",
		role: "BlogSpace member"
	} : authors[0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `author-line ${light ? "author-light" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/profile/$userId",
			params: { userId: author.id },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
				author,
				small: true
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/profile/$userId",
			params: { userId: author.id },
			className: "author-name",
			children: author.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "author-meta",
			children: [
				post.date,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
				post.readTime,
				" min read"
			]
		})] })]
	});
}
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { user, logout } = useBlog();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "site-header",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "nav-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "brand",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "brand-mark",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feather, { size: 21 })
						}),
						"BlogSpace",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "brand-dot",
							children: "."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "desktop-nav",
					"aria-label": "Main navigation",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						activeOptions: { exact: true },
						activeProps: { className: "nav-active" },
						children: "Home"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/explore",
						activeProps: { className: "nav-active" },
						children: "Explore"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "nav-actions",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							asChild: true,
							title: "Search stories",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/explore",
								"aria-label": "Search stories",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {})
							})
						}),
						user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: "desktop-only nav-text",
							to: "/dashboard",
							children: "My stories"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "desktop-only",
							variant: "ghost",
							onClick: logout,
							children: "Log out"
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: "desktop-only nav-text",
							to: "/login",
							children: "Log in"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "desktop-only signup-nav",
							variant: "outline",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/signup",
								children: "Sign up"
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "write-nav",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/write",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feather, {}), "Write a story"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "desktop-only admin-nav-btn",
							variant: "ghost",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/admin/login",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 15 }), "Admin"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mobile-menu",
							variant: "ghost",
							size: "icon",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen(!open),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mobile-navigation",
			"aria-label": "Mobile navigation",
			onClick: () => setOpen(false),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: "Home"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/explore",
					children: "Explore"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					children: "Log in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/signup",
					children: "Sign up"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dashboard",
					children: "My stories"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/profile/$userId",
					params: { userId: "emma" },
					children: "My profile"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/login",
					children: "Admin panel"
				})
			]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "site-footer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-container footer-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "brand",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feather, { size: 19 }),
						"BlogSpace",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "brand-dot",
							children: "."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "A little curiosity goes a long way." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "footer-meta",
					children: [
						"© 2026 BlogSpace ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						" Frontend demo ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/login",
							style: { color: "inherit" },
							children: "Admin"
						})
					]
				})
			]
		})
	});
}
function PostCard({ post }) {
	const { saved, toggleSave } = useBlog();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "post-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/post/$postId",
			params: { postId: post.id },
			className: "post-image-link",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: post.cover,
				width: 1024,
				height: 768,
				loading: "lazy",
				alt: `${post.category} editorial cover`
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `category-label category-${post.category.toLowerCase()}`,
				children: post.category
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "post-card-content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "post-title-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/post/$postId",
						params: { postId: post.id },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: post.title })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 19 })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: post.excerpt }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "post-card-bottom",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthorLine, { post }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": saved.includes(post.id) ? "Unsave story" : "Save story",
						title: "Save story",
						onClick: () => toggleSave(post.id),
						className: saved.includes(post.id) ? "text-primary" : "text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { fill: saved.includes(post.id) ? "currentColor" : "none" })
					})]
				})
			]
		})]
	});
}
function StoryActions({ post }) {
	const { liked, saved, toggleLike, toggleSave } = useBlog();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "story-actions",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			onClick: () => toggleLike(post.id),
			className: liked.includes(post.id) ? "text-primary" : "",
			"aria-label": "Like story",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { fill: liked.includes(post.id) ? "currentColor" : "none" }), post.likes]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			onClick: () => toggleSave(post.id),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { fill: saved.includes(post.id) ? "currentColor" : "none" }), saved.includes(post.id) ? "Saved" : "Save story"]
		})]
	});
}
function EmptyState({ text = "No stories found.", action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "empty-state",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feather, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: text }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "link",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: action?.to ?? "/explore",
					children: [
						action?.label ?? "Explore stories",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
					]
				})
			})
		]
	});
}
//#endregion
export { Navbar as a, Footer as i, Avatar as n, PostCard as o, EmptyState as r, StoryActions as s, AuthorLine as t };
