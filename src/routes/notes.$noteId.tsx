import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Editor } from "../component/editor";
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
