import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { routes } from "../routes-help/routes";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-2 text-lg light">
        <Link
          to={routes.catalog()}
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          My Projects
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
