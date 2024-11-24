import { createFileRoute } from "@tanstack/react-router";
import { Editor } from "../component/editor";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2">
      <Editor />
    </div>
  );
}
