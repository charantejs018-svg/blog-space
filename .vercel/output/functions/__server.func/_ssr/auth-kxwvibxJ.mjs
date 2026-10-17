import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Eye, S as Feather, k as ArrowRight, w as EyeOff } from "../_libs/lucide-react.mjs";
import { n as useBlog } from "./context-BQ6ZyczS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-kxwvibxJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var isSupabaseConfigured = !!{
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kY2Z6Y2J0YXZpYmZ4dGR1a2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNTM4MDQsImV4cCI6MjEwNzcyOTgwNH0.AWME85kwaxILvEhwbAzh0YXGUeDRDReVoVuSvJVbfwk",
	"VITE_SUPABASE_URL": "https://ndcfzcbtavibfxtdukel.supabase.co"
}["VITE_SUPABASE_URL"] && !!{
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kY2Z6Y2J0YXZpYmZ4dGR1a2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNTM4MDQsImV4cCI6MjEwNzcyOTgwNH0.AWME85kwaxILvEhwbAzh0YXGUeDRDReVoVuSvJVbfwk",
	"VITE_SUPABASE_URL": "https://ndcfzcbtavibfxtdukel.supabase.co"
}["VITE_SUPABASE_ANON_KEY"];
function AuthForm({ signup = false }) {
	const { login, signup: signupFn } = useBlog();
	const navigate = useNavigate();
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	async function handleSubmit(e) {
		e.preventDefault();
		setError(null);
		setSubmitting(true);
		try {
			if (signup) await signupFn(email, password, name);
			else await login(email, password);
			navigate({ to: "/dashboard" });
		} catch (err) {
			setError(err instanceof Error ? err.message : "Something went wrong.");
		} finally {
			setSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "auth-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "auth-heading",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "auth-symbol",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feather, { size: 26 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: "YOUR NEXT CHAPTER"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: signup ? "Make room for your story." : "Welcome back." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: signup ? "Join a community of curious minds." : "Good stories are waiting for you." })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "auth-form",
			onSubmit: handleSubmit,
			children: [
				signup && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Your name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoComplete: "name",
					placeholder: "Emma Wilson",
					required: true,
					value: name,
					onChange: (e) => setName(e.target.value),
					maxLength: 60
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Email address", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "email",
					autoComplete: "email",
					placeholder: "you@example.com",
					required: true,
					value: email,
					onChange: (e) => setEmail(e.target.value)
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Password", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "password-field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: visible ? "text" : "password",
						autoComplete: signup ? "new-password" : "current-password",
						placeholder: signup ? "At least 8 characters" : "Enter your password",
						minLength: 8,
						required: true,
						value: password,
						onChange: (e) => setPassword(e.target.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						type: "button",
						"aria-label": visible ? "Hide password" : "Show password",
						onClick: () => setVisible(!visible),
						children: visible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {})
					})]
				})] }),
				!isSupabaseConfigured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "demo-note",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Frontend preview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Supabase is not connected. This opens a demo session — no account is created and no data is stored." })]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "text-sm text-red-600",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					size: "lg",
					className: "auth-submit",
					disabled: submitting,
					children: [submitting ? "Please wait…" : isSupabaseConfigured ? signup ? "Create account" : "Log in" : signup ? "Try demo sign up" : "Enter demo session", !submitting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "auth-switch",
					children: [
						signup ? "Already have an account?" : "New to BlogSpace?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: signup ? "/login" : "/signup",
							children: signup ? "Log in" : "Sign up"
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { AuthForm as t };
