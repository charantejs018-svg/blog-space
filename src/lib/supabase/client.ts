import { createClient } from "@supabase/supabase-js";

const url = import.meta.env["VITE_SUPABASE_URL"] as string;
const key = import.meta.env["VITE_SUPABASE_ANON_KEY"] as string;

if (!url || !key) {
  console.warn(
    "Supabase env vars missing. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.",
  );
}

const PLACEHOLDER_URL = "https://placeholder.supabase.co";
const PLACEHOLDER_KEY = "placeholder-key";

export const supabase = createClient(url || PLACEHOLDER_URL, key || PLACEHOLDER_KEY);
