import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Feather, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ADMIN_CREDS, isAdminLoggedIn } from "./_layout";

export const Route = createFileRoute("/admin/login")({
  beforeLoad: () => {
    if (isAdminLoggedIn()) {
      // already logged in — redirect to admin dashboard
      window.location.replace("/admin");
    }
  },
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email === ADMIN_CREDS.email && password === ADMIN_CREDS.password) {
      sessionStorage.setItem("admin_auth", "true");
      navigate({ to: "/admin" });
    } else {
      setError("Invalid admin credentials.");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "oklch(0.18 0.025 285)",
        padding: 24,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          padding: "44px 40px",
          width: "100%",
          maxWidth: 420,
          boxShadow: "0 20px 60px oklch(0.1 0 0 / 25%)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <span
            style={{
              display: "inline-grid",
              placeItems: "center",
              width: 52,
              height: 52,
              background: "oklch(0.94 0.03 295)",
              color: "oklch(0.52 0.22 292)",
              borderRadius: 12,
              marginBottom: 18,
            }}
          >
            <ShieldCheck size={24} />
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginBottom: 8,
            }}
          >
            <span
              style={{
                background: "oklch(0.52 0.22 292)",
                color: "#fff",
                display: "grid",
                placeItems: "center",
                width: 26,
                height: 27,
                borderRadius: 6,
              }}
            >
              <Feather size={13} />
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              BlogSpace<span style={{ color: "oklch(0.52 0.22 292)" }}>.</span>
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              fontWeight: 750,
              margin: "10px 0 6px",
            }}
          >
            Admin access
          </h1>
          <p style={{ fontSize: 13, color: "oklch(0.52 0.014 285)" }}>
            Sign in to manage BlogSpace content.
          </p>
        </div>

        {/* Demo note */}
        <div
          style={{
            padding: "12px 14px",
            borderLeft: "2px solid oklch(0.52 0.22 292)",
            background: "oklch(0.94 0.03 295)",
            borderRadius: "0 5px 5px 0",
            marginBottom: 24,
          }}
        >
          <p style={{ fontSize: 11, color: "oklch(0.52 0.014 285)", lineHeight: 1.7 }}>
            <strong style={{ color: "oklch(0.23 0.01 285)" }}>Demo credentials — </strong>
            {ADMIN_CREDS.email} / {ADMIN_CREDS.password}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 550, marginBottom: 20 }}>
            Email address
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@blogspace.com"
              required
              style={{
                display: "block",
                marginTop: 9,
                width: "100%",
                padding: "11px 13px",
                border: "1px solid oklch(0.9 0.005 285)",
                borderRadius: 5,
                background: "oklch(0.985 0.003 85)",
                fontSize: 13,
                fontWeight: 400,
                boxSizing: "border-box",
              }}
            />
          </label>

          <label style={{ display: "block", fontSize: 13, fontWeight: 550, marginBottom: 8 }}>
            Password
            <div style={{ position: "relative" }}>
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  display: "block",
                  marginTop: 9,
                  width: "100%",
                  padding: "11px 42px 11px 13px",
                  border: "1px solid oklch(0.9 0.005 285)",
                  borderRadius: 5,
                  background: "oklch(0.985 0.003 85)",
                  fontSize: 13,
                  fontWeight: 400,
                  boxSizing: "border-box",
                }}
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                style={{
                  position: "absolute",
                  right: 4,
                  top: 14,
                  background: "transparent",
                  border: 0,
                  cursor: "pointer",
                  color: "oklch(0.52 0.014 285)",
                  padding: 4,
                }}
                aria-label={showPw ? "Hide password" : "Show password"}
              >
                {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </label>

          {error && (
            <p style={{ color: "oklch(0.577 0.245 27.325)", fontSize: 13, marginBottom: 12 }}>
              {error}
            </p>
          )}

          <Button type="submit" style={{ width: "100%", marginTop: 16 }}>
            Sign in to admin
          </Button>
        </form>
      </div>
    </div>
  );
}
