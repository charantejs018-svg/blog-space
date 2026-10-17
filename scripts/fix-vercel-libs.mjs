import { readdirSync, existsSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const funcDir = resolve(".vercel/output/functions/__server.func");
const libsDir = resolve(funcDir, "_libs");

// Inline __awaiter so no external tslib package is needed at runtime
const TSLIB_INLINE = `
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
`;

// Fix 1: replace bare "tslib" imports with inlined implementations in all _libs/*.mjs
if (existsSync(libsDir)) {
  for (const file of readdirSync(libsDir)) {
    if (!file.endsWith(".mjs")) continue;
    const filePath = resolve(libsDir, file);
    let src = readFileSync(filePath, "utf8");
    if (!src.includes('from "tslib"')) continue;
    // Remove the import line and prepend the inline implementation
    src = src.replace(/^import\s*\{[^}]+\}\s*from\s*["']tslib["'];?\n?/m, "");
    src = TSLIB_INLINE + src;
    writeFileSync(filePath, src);
    console.log(`✓ tslib inlined in ${file}`);
  }
} else {
  console.warn("⚠ _libs dir not found — skipping tslib inline");
}

// Fix 2: downgrade runtime from nodejs24.x to nodejs22.x (Vercel max supported)
const vcConfigPath = resolve(funcDir, ".vc-config.json");
if (existsSync(vcConfigPath)) {
  const config = JSON.parse(readFileSync(vcConfigPath, "utf8"));
  if (config.runtime === "nodejs24.x") {
    config.runtime = "nodejs22.x";
    writeFileSync(vcConfigPath, JSON.stringify(config, null, 2));
    console.log("✓ runtime patched: nodejs24.x → nodejs22.x");
  }
}
