import { r as __toESM } from "./_runtime.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./_ssr/button-B2wejuZy.mjs";
import { h as Outlet, y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { S as Feather, T as ChevronRight, _ as LogOut, h as Menu, t as X, v as LayoutDashboard } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_layout-CLG9OEIy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function isAdminLoggedIn() {
	return sessionStorage.getItem("admin_auth") === "true";
}
var navItems = [{
	to: "/admin",
	label: "Dashboard",
	icon: LayoutDashboard
}];
function AdminLayout() {
	const [sidebarOpen, setSidebarOpen] = (0, import_react.useState)(false);
	function handleLogout() {
		sessionStorage.removeItem("admin_auth");
		window.location.href = "/admin/login";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			display: "flex",
			minHeight: "100vh",
			background: "oklch(0.97 0.003 285)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			style: {
				width: sidebarOpen ? 220 : 64,
				flexShrink: 0,
				background: "oklch(0.18 0.025 285)",
				color: "oklch(0.92 0.005 285)",
				display: "flex",
				flexDirection: "column",
				transition: "width 0.22s",
				overflow: "hidden",
				position: "sticky",
				top: 0,
				height: "100vh"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						height: 64,
						display: "flex",
						alignItems: "center",
						gap: 10,
						padding: "0 16px",
						borderBottom: "1px solid oklch(1 0 0 / 8%)",
						flexShrink: 0
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							background: "oklch(0.52 0.22 292)",
							color: "#fff",
							display: "grid",
							placeItems: "center",
							width: 32,
							height: 32,
							borderRadius: 7,
							flexShrink: 0
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feather, { size: 16 })
					}), sidebarOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							fontFamily: "var(--font-display)",
							fontWeight: 700,
							fontSize: 15,
							whiteSpace: "nowrap"
						},
						children: "Admin Panel"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					style: {
						flex: 1,
						padding: "12px 0"
					},
					children: navItems.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to,
						style: {
							display: "flex",
							alignItems: "center",
							gap: 12,
							padding: "10px 16px",
							fontSize: 13,
							fontWeight: 500,
							color: "oklch(0.78 0.01 285)",
							whiteSpace: "nowrap",
							borderRadius: 0
						},
						activeProps: { style: {
							display: "flex",
							alignItems: "center",
							gap: 12,
							padding: "10px 16px",
							fontSize: 13,
							fontWeight: 600,
							color: "#fff",
							background: "oklch(0.52 0.22 292 / 30%)",
							borderLeft: "3px solid oklch(0.52 0.22 292)",
							whiteSpace: "nowrap"
						} },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							size: 17,
							style: { flexShrink: 0 }
						}), sidebarOpen && label]
					}, to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						padding: "12px 8px",
						borderTop: "1px solid oklch(1 0 0 / 8%)"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleLogout,
						style: {
							display: "flex",
							alignItems: "center",
							gap: 12,
							padding: "9px 8px",
							width: "100%",
							background: "transparent",
							border: 0,
							color: "oklch(0.65 0.01 285)",
							cursor: "pointer",
							fontSize: 13,
							borderRadius: 6,
							whiteSpace: "nowrap"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
							size: 16,
							style: { flexShrink: 0 }
						}), sidebarOpen && "Log out"]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				flex: 1,
				display: "flex",
				flexDirection: "column",
				minWidth: 0
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				style: {
					height: 64,
					background: "#fff",
					borderBottom: "1px solid oklch(0.9 0.005 285)",
					display: "flex",
					alignItems: "center",
					padding: "0 24px",
					gap: 16,
					position: "sticky",
					top: 0,
					zIndex: 30
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => setSidebarOpen((v) => !v),
						"aria-label": "Toggle sidebar",
						children: sidebarOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						style: {
							fontFamily: "var(--font-display)",
							fontWeight: 700,
							fontSize: 15
						},
						children: ["BlogSpace ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "oklch(0.52 0.22 292)" },
							children: "Admin"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							marginLeft: "auto",
							display: "flex",
							alignItems: "center",
							gap: 8
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							style: {
								display: "flex",
								alignItems: "center",
								gap: 5,
								fontSize: 12,
								color: "oklch(0.52 0.014 285)"
							},
							children: ["View site ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 13 })]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				style: {
					flex: 1,
					padding: "32px 32px 48px"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			})]
		})]
	});
}
//#endregion
export { AdminLayout as component, isAdminLoggedIn };
