import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/client-BJdHD4G1.js
var url = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kY2Z6Y2J0YXZpYmZ4dGR1a2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNTM4MDQsImV4cCI6MjEwNzcyOTgwNH0.AWME85kwaxILvEhwbAzh0YXGUeDRDReVoVuSvJVbfwk",
	"VITE_SUPABASE_URL": "https://ndcfzcbtavibfxtdukel.supabase.co"
}["VITE_SUPABASE_URL"];
var key = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kY2Z6Y2J0YXZpYmZ4dGR1a2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNTM4MDQsImV4cCI6MjEwNzcyOTgwNH0.AWME85kwaxILvEhwbAzh0YXGUeDRDReVoVuSvJVbfwk",
	"VITE_SUPABASE_URL": "https://ndcfzcbtavibfxtdukel.supabase.co"
}["VITE_SUPABASE_ANON_KEY"];
if (!url || !key) console.warn("Supabase env vars missing. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.");
var supabase = createClient(url || "https://placeholder.supabase.co", key || "placeholder-key");
//#endregion
export { supabase as t };
