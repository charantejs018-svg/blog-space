import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const funcDir = resolve(".vercel/output/functions/__server.func");
const libsDir = resolve(funcDir, "_libs");
const tslibSrc = resolve("node_modules/tslib");
const tslibDest = resolve(libsDir, "node_modules/tslib");

// Fix 1: copy tslib so _libs/*.mjs can resolve it
if (existsSync(libsDir) && existsSync(tslibSrc)) {
  mkdirSync(resolve(libsDir, "node_modules"), { recursive: true });
  cpSync(tslibSrc, tslibDest, { recursive: true });
  console.log("✓ tslib copied into _libs/node_modules/");
} else {
  console.warn("⚠ Could not find _libs or tslib — skipping fix");
  console.warn("  libsDir exists:", existsSync(libsDir));
  console.warn("  tslibSrc exists:", existsSync(tslibSrc));
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
