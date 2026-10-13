import { createFileRoute } from "@tanstack/react-router";
import { Editor } from "@/components/blog/editor";
import { pageHead } from "@/lib/blog/data";
export const Route = createFileRoute("/write")({
  head: () => pageHead("Write a story"),
  component: () => <Editor />,
});
