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
      <div className="flex gap-10 items-center">
        <label className="">
          <input required placeholder="Login" {...register("login")} />
        </label>
        <label className="">
          <input
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
