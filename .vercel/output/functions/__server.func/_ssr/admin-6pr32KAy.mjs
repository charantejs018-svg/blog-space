import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Eye, O as ArrowUpRight, a as Trash2, b as Heart, f as Plus, n as Users, o as Tag, p as Pencil, t as X, x as FileText } from "../_libs/lucide-react.mjs";
import { i as initialPosts, n as categories, t as authors } from "./data-DMP_he2M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-6pr32KAy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	"overview",
	"posts",
	"users",
	"categories",
	"settings"
];
function StatCard({ icon: Icon, label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			background: "#fff",
			border: "1px solid oklch(0.9 0.005 285)",
			borderRadius: 10,
			padding: "20px 22px",
			display: "flex",
			alignItems: "center",
			gap: 16
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				display: "grid",
				placeItems: "center",
				width: 42,
				height: 42,
				borderRadius: 9,
				background: accent ?? "oklch(0.94 0.03 295)",
				color: "oklch(0.52 0.22 292)",
				flexShrink: 0
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 19 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				fontFamily: "var(--font-display)",
				fontSize: 26,
				fontWeight: 700,
				lineHeight: 1
			},
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				fontSize: 12,
				color: "oklch(0.52 0.014 285)",
				marginTop: 4
			},
			children: label
		})] })]
	});
}
function AdminDashboard() {
	const [tab, setTab] = (0, import_react.useState)("overview");
	const [posts, setPosts] = (0, import_react.useState)(initialPosts);
	const [deletingId, setDeletingId] = (0, import_react.useState)(null);
	const [cats, setCats] = (0, import_react.useState)(categories.filter((c) => c !== "All stories"));
	const [newCat, setNewCat] = (0, import_react.useState)("");
	const [siteName, setSiteName] = (0, import_react.useState)("BlogSpace");
	const [tagline, setTagline] = (0, import_react.useState)("A little curiosity goes a long way.");
	const [settingsSaved, setSettingsSaved] = (0, import_react.useState)(false);
	const published = posts.filter((p) => p.status === "published");
	const drafts = posts.filter((p) => p.status === "draft");
	const totalLikes = posts.reduce((n, p) => n + p.likes, 0);
	function confirmDelete(id) {
		setPosts((prev) => prev.filter((p) => p.id !== id));
		setDeletingId(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { marginBottom: 28 },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					fontSize: 10,
					fontWeight: 650,
					letterSpacing: "1.8px",
					color: "oklch(0.52 0.014 285)",
					marginBottom: 6
				},
				children: "ADMIN PANEL"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				style: {
					fontFamily: "var(--font-display)",
					fontSize: 28,
					fontWeight: 750,
					margin: 0
				},
				children: "BlogSpace overview"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				display: "flex",
				gap: 4,
				borderBottom: "1px solid oklch(0.9 0.005 285)",
				marginBottom: 28
			},
			children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setTab(t),
				style: {
					padding: "10px 18px",
					fontSize: 13,
					fontWeight: tab === t ? 600 : 500,
					background: "transparent",
					border: 0,
					borderBottom: tab === t ? "2px solid oklch(0.52 0.22 292)" : "2px solid transparent",
					color: tab === t ? "oklch(0.52 0.22 292)" : "oklch(0.52 0.014 285)",
					cursor: "pointer",
					textTransform: "capitalize"
				},
				children: t
			}, t))
		}),
		tab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
					gap: 16,
					marginBottom: 36
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: FileText,
						label: "Published posts",
						value: published.length
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Pencil,
						label: "Drafts",
						value: drafts.length
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Heart,
						label: "Total likes",
						value: totalLikes
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Users,
						label: "Authors",
						value: authors.length
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				style: {
					fontFamily: "var(--font-display)",
					fontSize: 17,
					fontWeight: 700,
					marginBottom: 14
				},
				children: "Recent posts"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostsTable, {
				posts: posts.slice(0, 5),
				onDelete: setDeletingId
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setTab("posts"),
				style: {
					marginTop: 14,
					fontSize: 12,
					color: "oklch(0.52 0.22 292)",
					background: "transparent",
					border: 0,
					cursor: "pointer",
					display: "flex",
					alignItems: "center",
					gap: 4
				},
				children: ["View all posts ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 13 })]
			})
		] }),
		tab === "posts" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				marginBottom: 18
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				style: {
					fontFamily: "var(--font-display)",
					fontSize: 17,
					fontWeight: 700,
					margin: 0
				},
				children: [
					"All posts (",
					posts.length,
					")"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/write",
					children: "+ New post"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostsTable, {
			posts,
			onDelete: setDeletingId
		})] }),
		tab === "users" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			style: {
				fontFamily: "var(--font-display)",
				fontSize: 17,
				fontWeight: 700,
				marginBottom: 18
			},
			children: [
				"Authors (",
				authors.length,
				")"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				background: "#fff",
				border: "1px solid oklch(0.9 0.005 285)",
				borderRadius: 10,
				overflow: "hidden"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				style: {
					width: "100%",
					borderCollapse: "collapse"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
					style: { borderBottom: "1px solid oklch(0.9 0.005 285)" },
					children: [
						"Author",
						"Role",
						"Posts",
						"Total likes"
					].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						style: {
							padding: "12px 16px",
							textAlign: "left",
							fontSize: 11,
							fontWeight: 650,
							letterSpacing: "0.8px",
							color: "oklch(0.52 0.014 285)",
							textTransform: "uppercase"
						},
						children: h
					}, h))
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: authors.map((a) => {
					const authorPosts = posts.filter((p) => p.authorId === a.id);
					const likes = authorPosts.reduce((n, p) => n + p.likes, 0);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						style: { borderBottom: "1px solid oklch(0.95 0.003 285)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								style: { padding: "14px 16px" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: 10
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											display: "inline-grid",
											placeItems: "center",
											width: 34,
											height: 34,
											borderRadius: "50%",
											background: "oklch(0.94 0.03 295)",
											color: "oklch(0.52 0.22 292)",
											fontSize: 11,
											fontWeight: 600,
											flexShrink: 0
										},
										children: a.initials
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: 13,
											fontWeight: 600
										},
										children: a.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/profile/$userId",
										params: { userId: a.id },
										style: {
											fontSize: 11,
											color: "oklch(0.52 0.22 292)"
										},
										children: "View profile ↗"
									})] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								style: {
									padding: "14px 16px",
									fontSize: 12,
									color: "oklch(0.52 0.014 285)"
								},
								children: a.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								style: {
									padding: "14px 16px",
									fontSize: 13,
									fontWeight: 600
								},
								children: authorPosts.length
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								style: {
									padding: "14px 16px",
									fontSize: 13,
									fontWeight: 600
								},
								children: likes
							})
						]
					}, a.id);
				}) })]
			})
		})] }),
		tab === "categories" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					marginBottom: 18
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					style: {
						fontFamily: "var(--font-display)",
						fontSize: 17,
						fontWeight: 700,
						margin: 0
					},
					children: [
						"Categories (",
						cats.length,
						")"
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					background: "#fff",
					border: "1px solid oklch(0.9 0.005 285)",
					borderRadius: 10,
					padding: 20,
					marginBottom: 20
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						const trimmed = newCat.trim();
						if (trimmed && !cats.includes(trimmed)) {
							setCats((prev) => [...prev, trimmed]);
							setNewCat("");
						}
					},
					style: {
						display: "flex",
						gap: 10
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: newCat,
						onChange: (e) => setNewCat(e.target.value),
						placeholder: "New category name",
						style: {
							flex: 1,
							padding: "9px 13px",
							border: "1px solid oklch(0.9 0.005 285)",
							borderRadius: 6,
							fontSize: 13,
							background: "oklch(0.985 0.003 85)"
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						size: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 }), " Add"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					display: "flex",
					flexWrap: "wrap",
					gap: 10
				},
				children: cats.map((cat) => {
					const count = posts.filter((p) => p.category === cat).length;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: 8,
							padding: "8px 14px",
							background: "#fff",
							border: "1px solid oklch(0.9 0.005 285)",
							borderRadius: 8,
							fontSize: 13,
							fontWeight: 500
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
								size: 13,
								style: { color: "oklch(0.52 0.22 292)" }
							}),
							cat,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								style: {
									fontSize: 11,
									color: "oklch(0.52 0.014 285)",
									marginLeft: 2
								},
								children: [
									count,
									" post",
									count !== 1 ? "s" : ""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setCats((prev) => prev.filter((c) => c !== cat)),
								style: {
									background: "transparent",
									border: 0,
									cursor: "pointer",
									color: "oklch(0.65 0.01 285)",
									padding: 0,
									display: "grid",
									placeItems: "center"
								},
								"aria-label": `Remove ${cat}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 13 })
							})
						]
					}, cat);
				})
			})
		] }),
		tab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { maxWidth: 520 },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: {
						fontFamily: "var(--font-display)",
						fontSize: 17,
						fontWeight: 700,
						marginBottom: 22
					},
					children: "Site settings"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						background: "#fff",
						border: "1px solid oklch(0.9 0.005 285)",
						borderRadius: 10,
						padding: 28,
						display: "flex",
						flexDirection: "column",
						gap: 20
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							style: {
								display: "block",
								fontSize: 13,
								fontWeight: 550
							},
							children: ["Site name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: siteName,
								onChange: (e) => {
									setSiteName(e.target.value);
									setSettingsSaved(false);
								},
								style: {
									display: "block",
									marginTop: 8,
									width: "100%",
									padding: "10px 13px",
									border: "1px solid oklch(0.9 0.005 285)",
									borderRadius: 6,
									fontSize: 13,
									background: "oklch(0.985 0.003 85)",
									boxSizing: "border-box"
								}
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							style: {
								display: "block",
								fontSize: 13,
								fontWeight: 550
							},
							children: ["Tagline", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: tagline,
								onChange: (e) => {
									setTagline(e.target.value);
									setSettingsSaved(false);
								},
								style: {
									display: "block",
									marginTop: 8,
									width: "100%",
									padding: "10px 13px",
									border: "1px solid oklch(0.9 0.005 285)",
									borderRadius: 6,
									fontSize: 13,
									background: "oklch(0.985 0.003 85)",
									boxSizing: "border-box"
								}
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: 12
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => setSettingsSaved(true),
								size: "sm",
								children: "Save changes"
							}), settingsSaved && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									fontSize: 12,
									color: "oklch(0.4 0.09 155)"
								},
								children: "✓ Saved (local state only)"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						marginTop: 24,
						background: "#fff",
						border: "1px solid oklch(0.9 0.005 285)",
						borderRadius: 10,
						padding: 28
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						style: {
							fontFamily: "var(--font-display)",
							fontSize: 14,
							fontWeight: 700,
							margin: "0 0 14px"
						},
						children: "Admin credentials"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: {
							fontSize: 12,
							color: "oklch(0.52 0.014 285)",
							lineHeight: 1.7,
							margin: 0
						},
						children: [
							"Email: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "admin@blogspace.com" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Password: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "admin123" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									marginTop: 6,
									display: "block"
								},
								children: "These are demo credentials stored in local session only."
							})
						]
					})]
				})
			]
		}),
		deletingId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				position: "fixed",
				inset: 0,
				background: "oklch(0.13 0.008 285 / 50%)",
				display: "grid",
				placeItems: "center",
				zIndex: 60,
				padding: 24
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					background: "#fff",
					padding: 30,
					borderRadius: 10,
					maxWidth: 380,
					width: "100%",
					boxShadow: "0 16px 60px oklch(0.1 0 0 / 18%)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						style: {
							fontFamily: "var(--font-display)",
							fontSize: 20,
							margin: "0 0 10px"
						},
						children: "Delete this post?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: {
							fontSize: 13,
							color: "oklch(0.52 0.014 285)",
							lineHeight: 1.7
						},
						children: "This will remove it from the admin view. Changes reset on reload."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							justifyContent: "flex-end",
							gap: 10,
							marginTop: 22
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setDeletingId(null),
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "destructive",
							onClick: () => confirmDelete(deletingId),
							children: "Delete"
						})]
					})
				]
			})
		})
	] });
}
function PostsTable({ posts, onDelete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			background: "#fff",
			border: "1px solid oklch(0.9 0.005 285)",
			borderRadius: 10,
			overflow: "hidden"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			style: {
				width: "100%",
				borderCollapse: "collapse"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				style: { borderBottom: "1px solid oklch(0.9 0.005 285)" },
				children: [
					"Title",
					"Category",
					"Status",
					"Likes",
					"Actions"
				].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					style: {
						padding: "12px 16px",
						textAlign: "left",
						fontSize: 11,
						fontWeight: 650,
						letterSpacing: "0.8px",
						color: "oklch(0.52 0.014 285)",
						textTransform: "uppercase"
					},
					children: h
				}, h))
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				style: { borderBottom: "1px solid oklch(0.95 0.003 285)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						style: {
							padding: "13px 16px",
							maxWidth: 280
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								fontSize: 13,
								fontWeight: 600,
								lineHeight: 1.4
							},
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								fontSize: 11,
								color: "oklch(0.52 0.014 285)",
								marginTop: 2
							},
							children: [
								p.date,
								" · ",
								p.readTime,
								" min"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						style: { padding: "13px 16px" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontSize: 10,
								fontWeight: 600,
								padding: "3px 8px",
								borderRadius: 4,
								background: "oklch(0.94 0.03 295)",
								color: "oklch(0.52 0.22 292)"
							},
							children: p.category
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						style: { padding: "13px 16px" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontSize: 10,
								fontWeight: 600,
								padding: "3px 8px",
								borderRadius: 4,
								background: p.status === "published" ? "oklch(0.93 0.04 155)" : "oklch(0.94 0.06 75)",
								color: p.status === "published" ? "oklch(0.4 0.09 155)" : "oklch(0.46 0.09 65)"
							},
							children: p.status
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						style: {
							padding: "13px 16px",
							fontSize: 13,
							fontWeight: 600
						},
						children: p.likes
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						style: { padding: "13px 16px" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								gap: 4
							},
							children: [
								p.status === "published" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									asChild: true,
									title: "View post",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/post/$postId",
										params: { postId: p.id },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 15 })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									asChild: true,
									title: "Edit post",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/edit/$postId",
										params: { postId: p.id },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { size: 15 })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									title: "Delete post",
									onClick: () => onDelete(p.id),
									style: { color: "oklch(0.577 0.245 27.325)" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 15 })
								})
							]
						})
					})
				]
			}, p.id)) })]
		})
	});
}
//#endregion
export { AdminDashboard as component };
