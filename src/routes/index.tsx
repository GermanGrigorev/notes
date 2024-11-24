import { createFileRoute } from "@tanstack/react-router";
import { Editor } from "../component/editor";
import { ProjectCatalog } from "../good/project-catalog";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2">
      <ProjectCatalog />
    </div>
  );
}
