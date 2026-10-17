import { createFileRoute, Outlet, Link, redirect } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard,
  LogOut,
  Feather,
  Menu,
  X,
  ChevronRight,
  Tag,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ── Admin auth (local-state only, no real backend) ────────────────────────────
export const ADMIN_CREDS = { email: "admin@blogspace.com", password: "admin123" };

export function isAdminLoggedIn() {
  return sessionStorage.getItem("admin_auth") === "true";
}

export const Route = createFileRoute("/admin/_layout")({
  beforeLoad: () => {
    if (!isAdminLoggedIn()) {
      throw redirect({ to: "/admin/login" });
    }
  },
  component: AdminLayout,
});

const navItems = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
] as const;

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleLogout() {
    sessionStorage.removeItem("admin_auth");
    window.location.href = "/admin/login";
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "oklch(0.97 0.003 285)" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: sidebarOpen ? 220 : 64,
          flexShrink: 0,
          background: "oklch(0.18 0.025 285)",
          color: "oklch(0.92 0.005 285)",
          display: "flex",
          flexDirection: "column",
          transition: "width 0.22s",
          overflow: "hidden",
          position: "sticky",
          top: 0,
          height: "100vh",
        }}
      >
        {/* Brand */}
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "0 16px",
            borderBottom: "1px solid oklch(1 0 0 / 8%)",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              background: "oklch(0.52 0.22 292)",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              width: 32,
              height: 32,
              borderRadius: 7,
              flexShrink: 0,
            }}
          >
            <Feather size={16} />
          </span>
          {sidebarOpen && (
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, whiteSpace: "nowrap" }}>
              Admin Panel
            </span>
          )}
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "12px 0" }}>
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 16px",
                fontSize: 13,
                fontWeight: 500,
                color: "oklch(0.78 0.01 285)",
                whiteSpace: "nowrap",
                borderRadius: 0,
              }}
              activeProps={{
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 16px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#fff",
                  background: "oklch(0.52 0.22 292 / 30%)",
                  borderLeft: "3px solid oklch(0.52 0.22 292)",
                  whiteSpace: "nowrap",
                },
              }}
            >
              <Icon size={17} style={{ flexShrink: 0 }} />
              {sidebarOpen && label}
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div style={{ padding: "12px 8px", borderTop: "1px solid oklch(1 0 0 / 8%)" }}>
          <button
            onClick={handleLogout}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "9px 8px",
              width: "100%",
              background: "transparent",
              border: 0,
              color: "oklch(0.65 0.01 285)",
              cursor: "pointer",
              fontSize: 13,
              borderRadius: 6,
              whiteSpace: "nowrap",
            }}
          >
            <LogOut size={16} style={{ flexShrink: 0 }} />
            {sidebarOpen && "Log out"}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Top bar */}
        <header
          style={{
            height: 64,
            background: "#fff",
            borderBottom: "1px solid oklch(0.9 0.005 285)",
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
            gap: 16,
            position: "sticky",
            top: 0,
            zIndex: 30,
          }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15 }}>
            BlogSpace <span style={{ color: "oklch(0.52 0.22 292)" }}>Admin</span>
          </span>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: 12,
                color: "oklch(0.52 0.014 285)",
              }}
            >
              View site <ChevronRight size={13} />
            </Link>
          </div>
        </header>

        <main style={{ flex: 1, padding: "32px 32px 48px" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
