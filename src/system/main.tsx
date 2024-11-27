import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";
import { initApis } from "./initApis";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// init apis
initApis();

//@ts-ignore
window.global ||= window;

// create tanstack queryClient
const queryClient = new QueryClient();

function App() {
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <main
          className={` mine text-foreground bg-background min-h-screen font-unbounded font-extralight`}
        >
          <RouterProvider router={router} />
        </main>
      </QueryClientProvider>
    </NextUIProvider>
  );
}

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
