import { cpSync, existsSync, mkdirSync } from "fs";
import { resolve } from "path";

const funcDir = resolve(".vercel/output/functions/__server.func");
const libsDir = resolve(funcDir, "_libs");
const tslibSrc = resolve(funcDir, "node_modules/tslib");
const tslibDest = resolve(libsDir, "node_modules/tslib");

if (existsSync(libsDir) && existsSync(tslibSrc)) {
  mkdirSync(resolve(libsDir, "node_modules"), { recursive: true });
  cpSync(tslibSrc, tslibDest, { recursive: true });
  console.log("✓ tslib copied into _libs/node_modules/");
} else {
  console.warn("⚠ Could not find _libs or tslib — skipping fix");
}
