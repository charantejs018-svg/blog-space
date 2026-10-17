import { readdirSync, existsSync, readFileSync, writeFileSync, statSync } from "fs";
import { resolve } from "path";

const funcDir = resolve(".vercel/output/functions/__server.func");
const libsDir = resolve(funcDir, "_libs");

console.log("fix-vercel-libs: starting...");
console.log("  funcDir:", funcDir);
console.log("  libsDir:", libsDir, "exists:", existsSync(libsDir));

// All tslib helpers that might be imported
const TSLIB_HELPERS = `
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0: case 1: t = op; break;
        case 4: _.label++; return { value: op[1], done: false };
        case 5: _.label++; y = op[1]; op = [0]; continue;
        case 7: op = _.ops.pop(); _.trys.pop(); continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
          if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
          if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
          if (t[2]) _.ops.pop();
          _.trys.pop(); continue;
      }
      op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () { return o && i >= o.length ? { done: true } : { done: false, value: o[i++] }; }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try { while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value); }
  catch (error) { e = { error: error }; }
  finally { try { if (r && !r.done && (m = i["return"])) m.call(i); } finally { if (e) throw e.error; } }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) { if (!ar) ar = Array.prototype.slice.call(from, 0, i); ar[i] = from[i]; }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
`;

// Fix 1: inline all tslib imports in _libs/*.mjs
if (existsSync(libsDir)) {
  const files = readdirSync(libsDir).filter(f => f.endsWith(".mjs"));
  console.log(`  scanning ${files.length} .mjs files in _libs/`);
  let patched = 0;
  for (const file of files) {
    const filePath = resolve(libsDir, file);
    if (statSync(filePath).isDirectory()) continue;
    let src = readFileSync(filePath, "utf8");
    if (!src.includes("tslib")) continue;
    // Remove ALL tslib import lines
    src = src.replace(/^import\s*\{[^}]+\}\s*from\s*["']tslib["'];?\r?\n?/gm, "");
    src = src.replace(/^import\s+\*\s+as\s+\w+\s+from\s*["']tslib["'];?\r?\n?/gm, "");
    // Prepend all helpers
    src = TSLIB_HELPERS + src;
    writeFileSync(filePath, src);
    console.log(`  ✓ tslib inlined in ${file}`);
    patched++;
  }
  if (patched === 0) console.log("  no files needed tslib patching");
} else {
  console.error("  ✗ _libs dir not found — build may have failed");
  process.exit(1);
}

// Fix 2: patch nodejs24.x → nodejs22.x
const vcConfigPath = resolve(funcDir, ".vc-config.json");
if (existsSync(vcConfigPath)) {
  const config = JSON.parse(readFileSync(vcConfigPath, "utf8"));
  if (config.runtime === "nodejs24.x") {
    config.runtime = "nodejs22.x";
    writeFileSync(vcConfigPath, JSON.stringify(config, null, 2));
    console.log("  ✓ runtime patched: nodejs24.x → nodejs22.x");
  } else {
    console.log("  runtime is already:", config.runtime);
  }
}

console.log("fix-vercel-libs: done.");
