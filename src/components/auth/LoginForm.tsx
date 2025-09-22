import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/auth/useLogin.ts";
import { type LoginFormInputs, loginSchema } from "../../schemas/loginSchema";
import BaseForm, { type FieldConfig } from "../UI/BaseForm";
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

    const fields: FieldConfig<LoginFormInputs>[] = [
        { name: "email", label: "Email" },
        { name: "password", label: "Password", type: "password" },
    ];

    return (
        <BaseForm
            title="Login"
            onSubmit={handleSubmit((data) => login(data))}
            isPending={isPending}
            submitLabel="Login"
            errorMessage={error ? "Login failed" : undefined}
        >
            {fields.map((field) => (
                <TextField
                    key={field.name}
                    label={field.label}
                    type={field.type}
                    register={register(field.name)}
                    error={errors[field.name]}
                />
            ))}
        </BaseForm>
    );
}
