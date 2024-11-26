import { createFileRoute } from "@tanstack/react-router";
import { Notepad } from "../good/notepad";

export const Route = createFileRoute("/notes/$noteId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { noteId } = Route.useParams();
  return (
    <div className="p-2">
      <Notepad noteId={noteId} />
    </div>
  );
}
