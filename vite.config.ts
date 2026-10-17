// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { readFileSync } from "fs";
import { resolve } from "path";

// Inline tslib at bundle time so Vercel never needs to resolve it at runtime
const tslibCode = readFileSync(resolve("node_modules/tslib/tslib.es6.mjs"), "utf8");
const inlineTslib = {
  name: "inline-tslib",
  resolveId(id: string) {
    if (id === "tslib") return "\0tslib-inline";
  },
  load(id: string) {
    if (id === "\0tslib-inline") return tslibCode;
  },
};

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [inlineTslib],
  },
  nitro: {
    preset: "vercel",
    rollupConfig: {
      plugins: [inlineTslib],
    },
    noExternal: [
      "tslib",
      "@supabase/functions-js",
      "@supabase/supabase-js",
      "@supabase/auth-js",
      "@supabase/postgrest-js",
      "@supabase/realtime-js",
      "@supabase/storage-js",
    ],
  },
});
