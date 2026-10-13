import { createFileRoute } from "@tanstack/react-router";
import { Editor } from "@/components/blog/editor";
import { pageHead } from "@/lib/blog/data";
export const Route = createFileRoute("/edit/$postId")({
  head: () => pageHead("Edit your story"),
  component: Edit,
});
function Edit() {
  const { postId } = Route.useParams();
  return <Editor postId={postId} key={postId} />;
}
