import { createFileRoute } from "@tanstack/react-router";
import { Notepad } from "../good/notepad";
import { routes } from "../routes-help/routes";

export const Route = createFileRoute("/notes/$noteId")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-2">
      <Notepad getCatalogUrl={routes.catalog} />
    </div>
  );
}
