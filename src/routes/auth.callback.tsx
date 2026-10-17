import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

function AuthCallback() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("Verifying your email…");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const errorDesc = params.get("error_description");

    if (errorDesc) {
      setMessage(`Verification failed: ${errorDesc}`);
      return;
    }

    if (code) {
      // PKCE flow — exchange the one-time code for a session
      supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
        if (error) {
          setMessage("Verification failed. The link may have expired — please sign up again.");
        } else {
          navigate({ to: "/dashboard" });
        }
      });
    } else {
      // Implicit / magic-link flow — SDK auto-detects tokens in the hash
      supabase.auth.getSession().then(({ data }) => {
        if (data.session) {
          navigate({ to: "/dashboard" });
        } else {
          setMessage("Email verified! Please log in.");
          setTimeout(() => navigate({ to: "/login" }), 1500);
        }
      });
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}

export const Route = createFileRoute("/auth/callback")({
  component: AuthCallback,
});
