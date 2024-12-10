import { Button } from "@nextui-org/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { authApi, RegisterData } from "../../api/auth.api";
// import { useProjectCreateMutation } from "../state/project-create.mutation";

type Inputs = {
  login: string;
  password: string;
};

export function LoginForm({
  onLogin,
}: {
  onLogin: (formData: RegisterData) => Promise<void>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = async (formData) => {
    await onLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex flex-col gap-5 items-center">
        <label className="">
          <div className="mb-2">Login:</div>
          <input
            className=" border rounded-2xl p-2"
            required
            placeholder="Login"
            {...register("login")}
          />
        </label>
        <label className="">
          <div className="mb-2">Password:</div>
          <input
            className=" border rounded-2xl p-2"
            required
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </label>
        <Button color="primary" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
}
