import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowLeft, E as Check, S as Feather, f as Plus, g as MapPin } from "../_libs/lucide-react.mjs";
import { t as authors } from "./data-DMP_he2M.mjs";
import { n as useBlog } from "./context-BQ6ZyczS.mjs";
import { n as Avatar, o as PostCard, r as EmptyState } from "./shared-dFqYdAwj.mjs";
import { t as Route } from "./profile._userId-xxBPIy6H.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile._userId-uHEvi43o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Profile() {
	const { userId } = Route.useParams();
	const { posts, user } = useBlog();
	const author = authors.find((a) => a.id === userId);
	const [following, setFollowing] = (0, import_react.useState)(false);
	if (!author) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { text: "This writer isn't available." });
	const stories = posts.filter((p) => p.authorId === userId && p.status === "published");
	const display = user?.id === author.id ? user : author;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-container standard-page profile-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/explore",
				className: "back-link",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), " Back to stories"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "profile-header",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, { author: display }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "MEET THE WRITER"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: display.name }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "profile-role",
						children: display.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "profile-bio",
						children: display.bio
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "profile-meta",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 15 }), " Copenhagen, Denmark"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feather, { size: 15 }), " Joined September 2026"] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "profile-stats",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: stories.length }), " stories"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: stories.reduce((n, p) => n + p.likes, 0) }), " appreciations"] })]
					}),
					userId === (user?.id ?? "emma") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard",
							children: "My writing desk"
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: following ? "outline" : "default",
						onClick: () => setFollowing(!following),
						children: [following ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), following ? "Following" : "Follow writer"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "section-heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					"Stories by ",
					display.name.split(" ")[0],
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "heading-dot",
						children: "."
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "posts-grid",
				children: stories.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostCard, { post: p }, p.id))
			})
		]
	});
}
//#endregion
export { Profile as component };
