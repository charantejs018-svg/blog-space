import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as pageHead, i as initialPosts } from "./data-DMP_he2M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/post._postId-5slEaylx.js
var $$splitComponentImporter = () => import("./post._postId-CLbpntY1.mjs");
var Route = createFileRoute("/post/$postId")({
	head: ({ params }) => pageHead(initialPosts.find((p) => p.id === params.postId)?.title ?? "Read a story"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
