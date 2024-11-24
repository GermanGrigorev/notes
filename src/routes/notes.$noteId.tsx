import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Editor } from "../component/editor";

export const Route = createFileRoute("/notes/$noteId")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-2">
      <Editor />
    </div>
  );
}
