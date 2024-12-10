import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { routes } from "../routes-help/routes";
import { useState, useEffect } from "react";
import { tokenLs } from "../feature/auth/state/token.ls";
import { LoginForm } from "../feature/auth/ui/login-form/login-form";
import { Button } from "@nextui-org/react";
import { authApi, RegisterData } from "../feature/auth/api/auth.api";
import { noteApi } from "../feature/note/api/note.api";
import { projectApi } from "../feature/project/api/project.api";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = tokenLs.getValue();
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const handleLogin = async (formData: RegisterData) => {
    setError("");
    const [reg, regErr] = await authApi.register(formData);
    if (regErr) {
      const [login, loginErr] = await authApi.ping(formData);
      if (loginErr) {
        setError("Account exists or wrong password");
        return;
      }
    }

    setIsLogin(true);
  };

  const handleLogout = async () => {
    await authApi.logout();
    setIsLogin(false);
  };

  return (
    <>
      <div className="p-2 flex gap-2 text-lg light justify-between">
        <Link
          className="font-unbounded"
          to={routes.catalog()}
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          My Projects
        </Link>
        {isLogin && <Button onClick={handleLogout}>Logout</Button>}
      </div>
      <hr />
      {isLogin ? (
        <Outlet />
      ) : (
        <div className="mt-10">
          <LoginForm onLogin={handleLogin} />
          {error && (
            <div className="text-danger-600 animate-bounce text-4xl italic text-center mt-16">
              {error}
              <div className="flex justify-center h-20 mt-2">
                <img className="" src="../logo.jpg" />
                {/* <img className="animate-spin" src="../logo.jpg" /> */}
              </div>
            </div>
          )}
        </div>
      )}
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </>
  );
}
