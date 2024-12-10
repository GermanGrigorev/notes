import { createFileRoute } from "@tanstack/react-router";
import { ProjectCatalog } from "../good/project-catalog";
import { routes } from "../routes-help/routes";
import { LoginForm } from "../feature/auth/ui/login-form/login-form";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {

  return (
    <div className="p-2">
      <ProjectCatalog noteRoute={routes.noteRoute} />
    </div>
  );
}
