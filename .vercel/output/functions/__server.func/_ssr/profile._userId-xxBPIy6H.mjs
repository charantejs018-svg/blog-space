import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as pageHead, t as authors } from "./data-DMP_he2M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile._userId-xxBPIy6H.js
var $$splitComponentImporter = () => import("./profile._userId-uHEvi43o.mjs");
var Route = createFileRoute("/profile/$userId")({
	head: ({ params }) => pageHead(`${authors.find((a) => a.id === params.userId)?.name ?? "Writer"} — Profile`),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
