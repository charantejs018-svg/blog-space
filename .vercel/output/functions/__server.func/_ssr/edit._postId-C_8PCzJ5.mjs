import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Route } from "./edit._postId-BBEg9Y9_.mjs";
import { t as Editor } from "./editor-C3cZy7No.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/edit._postId-C_8PCzJ5.js
var import_jsx_runtime = require_jsx_runtime();
function Edit() {
	const { postId } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Editor, { postId }, postId);
}
//#endregion
export { Edit as component };
