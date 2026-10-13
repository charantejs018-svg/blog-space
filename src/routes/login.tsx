import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/blog/auth";
import { pageHead } from "@/lib/blog/data";
export const Route = createFileRoute("/login")({
  head: () => pageHead("Log in — frontend preview"),
  component: () => <AuthForm />,
});
