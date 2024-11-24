import { createFileRoute } from "@tanstack/react-router";
import { ProjectCatalog } from "../good/project-catalog";
import { routes } from "../routes-help/routes";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2">
      <ProjectCatalog getNoteUrl={routes.note} />
    </div>
  );
}
