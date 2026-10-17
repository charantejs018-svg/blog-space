import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-BJdHD4G1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth.callback-B4n30cn-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthCallback() {
	const navigate = useNavigate();
	const [message, setMessage] = (0, import_react.useState)("Verifying your email…");
	(0, import_react.useEffect)(() => {
		const params = new URLSearchParams(window.location.search);
		const code = params.get("code");
		const errorDesc = params.get("error_description");
		if (errorDesc) {
			setMessage(`Verification failed: ${errorDesc}`);
			return;
		}
		if (code) supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
			if (error) setMessage("Verification failed. The link may have expired — please sign up again.");
			else navigate({ to: "/dashboard" });
		});
		else supabase.auth.getSession().then(({ data }) => {
			if (data.session) navigate({ to: "/dashboard" });
			else {
				setMessage("Email verified! Please log in.");
				setTimeout(() => navigate({ to: "/login" }), 1500);
			}
		});
	}, [navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: message
		})
	});
}
//#endregion
export { AuthCallback as component };
