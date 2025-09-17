import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/auth/useLogout.ts";
import { type RegisterFormInputs, registerSchema } from "../../schemas/registerSchema";
import SubmitButton from "../UI/SubmitButton";
import TextField from "../UI/TextField.tsx";

export default function RegisterForm() {
  const navigate = useNavigate();
  const { mutate: registerUser, isPending, error } = useRegister(navigate);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormInputs) => {
    registerUser(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-gray-600 p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
    >
      <h1 className="text-2xl font-heading mb-4 text-primary">Register</h1>

      <TextField label="Username" register={register("username")} error={errors.username} />
      <TextField label="Email" register={register("email")} error={errors.email} />
      <TextField
        label="Password"
        type="password"
        register={register("password")}
        error={errors.password}
      />

      {error && <p className="text-red-500 text-sm">Registration failed</p>}

      <SubmitButton label={isPending ? "Loading..." : "Register"} disabled={isPending} />
    </form>
  );
}
