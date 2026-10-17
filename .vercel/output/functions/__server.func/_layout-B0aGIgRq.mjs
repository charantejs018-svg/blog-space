import { G as redirect, _ as createFileRoute, g as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_layout-B0aGIgRq.js
var $$splitComponentImporter = () => import("./_layout-CLG9OEIy.mjs");
var ADMIN_CREDS = {
	email: "admin@blogspace.com",
	password: "admin123"
};
function isAdminLoggedIn() {
	return sessionStorage.getItem("admin_auth") === "true";
}
var Route = createFileRoute("/admin/_layout")({
	beforeLoad: () => {
		if (!isAdminLoggedIn()) throw redirect({ to: "/admin/login" });
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as n, isAdminLoggedIn as r, ADMIN_CREDS as t };
