import { createFileRoute } from "@tanstack/react-router";
import { Feed } from "@/components/blog/feed";
import { pageHead } from "@/lib/blog/data";
export const Route = createFileRoute("/explore")({
  head: () => pageHead("Explore stories"),
  component: () => <Feed explore />,
});
