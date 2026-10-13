import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/blog/auth";
import { pageHead } from "@/lib/blog/data";
export const Route = createFileRoute("/signup")({
  head: () => pageHead("Sign up — frontend preview"),
  component: () => <AuthForm signup />,
});
