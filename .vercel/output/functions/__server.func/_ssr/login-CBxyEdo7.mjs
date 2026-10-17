import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Eye, S as Feather, c as ShieldCheck, w as EyeOff } from "../_libs/lucide-react.mjs";
import { t as ADMIN_CREDS } from "../_layout-B0aGIgRq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CBxyEdo7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLogin() {
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPw, setShowPw] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	function handleSubmit(e) {
		e.preventDefault();
		if (email === ADMIN_CREDS.email && password === ADMIN_CREDS.password) {
			sessionStorage.setItem("admin_auth", "true");
			navigate({ to: "/admin" });
		} else setError("Invalid admin credentials.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			minHeight: "100vh",
			display: "grid",
			placeItems: "center",
			background: "oklch(0.18 0.025 285)",
			padding: 24
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				background: "#fff",
				borderRadius: 12,
				padding: "44px 40px",
				width: "100%",
				maxWidth: 420,
				boxShadow: "0 20px 60px oklch(0.1 0 0 / 25%)"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						textAlign: "center",
						marginBottom: 32
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								display: "inline-grid",
								placeItems: "center",
								width: 52,
								height: 52,
								background: "oklch(0.94 0.03 295)",
								color: "oklch(0.52 0.22 292)",
								borderRadius: 12,
								marginBottom: 18
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 24 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: 8,
								marginBottom: 8
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									background: "oklch(0.52 0.22 292)",
									color: "#fff",
									display: "grid",
									placeItems: "center",
									width: 26,
									height: 27,
									borderRadius: 6
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feather, { size: 13 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								style: {
									fontFamily: "var(--font-display)",
									fontWeight: 800,
									fontSize: 20
								},
								children: ["BlogSpace", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: { color: "oklch(0.52 0.22 292)" },
									children: "."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							style: {
								fontFamily: "var(--font-display)",
								fontSize: 22,
								fontWeight: 750,
								margin: "10px 0 6px"
							},
							children: "Admin access"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								fontSize: 13,
								color: "oklch(0.52 0.014 285)"
							},
							children: "Sign in to manage BlogSpace content."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						padding: "12px 14px",
						borderLeft: "2px solid oklch(0.52 0.22 292)",
						background: "oklch(0.94 0.03 295)",
						borderRadius: "0 5px 5px 0",
						marginBottom: 24
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: {
							fontSize: 11,
							color: "oklch(0.52 0.014 285)",
							lineHeight: 1.7
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								style: { color: "oklch(0.23 0.01 285)" },
								children: "Demo credentials — "
							}),
							ADMIN_CREDS.email,
							" / ",
							ADMIN_CREDS.password
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							style: {
								display: "block",
								fontSize: 13,
								fontWeight: 550,
								marginBottom: 20
							},
							children: ["Email address", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "admin@blogspace.com",
								required: true,
								style: {
									display: "block",
									marginTop: 9,
									width: "100%",
									padding: "11px 13px",
									border: "1px solid oklch(0.9 0.005 285)",
									borderRadius: 5,
									background: "oklch(0.985 0.003 85)",
									fontSize: 13,
									fontWeight: 400,
									boxSizing: "border-box"
								}
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							style: {
								display: "block",
								fontSize: 13,
								fontWeight: 550,
								marginBottom: 8
							},
							children: ["Password", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: { position: "relative" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: showPw ? "text" : "password",
									value: password,
									onChange: (e) => setPassword(e.target.value),
									placeholder: "••••••••",
									required: true,
									style: {
										display: "block",
										marginTop: 9,
										width: "100%",
										padding: "11px 42px 11px 13px",
										border: "1px solid oklch(0.9 0.005 285)",
										borderRadius: 5,
										background: "oklch(0.985 0.003 85)",
										fontSize: 13,
										fontWeight: 400,
										boxSizing: "border-box"
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowPw((v) => !v),
									style: {
										position: "absolute",
										right: 4,
										top: 14,
										background: "transparent",
										border: 0,
										cursor: "pointer",
										color: "oklch(0.52 0.014 285)",
										padding: 4
									},
									"aria-label": showPw ? "Hide password" : "Show password",
									children: showPw ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 16 })
								})]
							})]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								color: "oklch(0.577 0.245 27.325)",
								fontSize: 13,
								marginBottom: 12
							},
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							style: {
								width: "100%",
								marginTop: 16
							},
							children: "Sign in to admin"
						})
					]
				})
			]
		})
	});
}
//#endregion
export { AdminLogin as component };
