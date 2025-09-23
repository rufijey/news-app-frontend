import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/auth/useRegister.ts";
import { type RegisterFormInputs, registerSchema } from "../../schemas/registerSchema";
import BaseForm, { type FieldConfig } from "../UI/BaseForm";
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

    const fields: FieldConfig<RegisterFormInputs>[] = [
        { name: "username", label: "Username" },
        { name: "email", label: "Email" },
        { name: "password", label: "Password", type: "password" },
    ];

    return (
        <BaseForm
            title="Register"
            onSubmit={handleSubmit((data) => registerUser(data))}
            isPending={isPending}
            submitLabel="Register"
            errorMessage={error ? "Registration failed" : undefined}
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
