import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/auth/useLogin.ts";
import { type LoginFormInputs, loginSchema } from "../../schemas/loginSchema";
import SubmitButton from "../UI/SubmitButton";
import TextField from "../UI/TextField.tsx";

export default function LoginForm() {
  const navigate = useNavigate();
  const { mutate: login, isPending, error } = useLogin(navigate);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    login(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-gray-600 p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
    >
      <h1 className="text-2xl font-heading mb-4 text-primary">Login</h1>

      <TextField label="Email" register={register("email")} error={errors.email} />
      <TextField
        label="Password"
        type="password"
        register={register("password")}
        error={errors.password}
      />

      {error && <p className="text-red-500 text-sm">Login failed</p>}

      <SubmitButton label={isPending ? "Loading..." : "Login"} disabled={isPending} />
    </form>
  );
}
