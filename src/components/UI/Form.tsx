import { zodResolver } from "@hookform/resolvers/zod";
import { type FieldError, type FieldValues, type Path, useForm } from "react-hook-form";
import type { ZodType } from "zod";
import TextField from "./TextField";
import SubmitButton from "./SubmitButton";

export interface FormField {
    name: string;
    label: string;
    type?: string;
}

interface FormProps<T extends FieldValues> {
    title: string;
    // biome-ignore lint/suspicious/noExplicitAny: need ZodType<T, any, any> for react-hook-form
    schema: ZodType<T, any, any>
    fields: FormField[];
    onSubmit: (data: T) => void;
    isPending?: boolean;
    error?: string;
    submitLabel?: string;
}

export default function Form<T extends FieldValues>({
                                                        title,
                                                        schema,
                                                        fields,
                                                        onSubmit,
                                                        isPending = false,
                                                        error,
                                                        submitLabel,
                                                    }: FormProps<T>) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<T>({
        resolver: zodResolver(schema),
    });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white dark:bg-gray-600 p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
        >
            <h1 className="text-2xl font-heading mb-4 text-primary">{title}</h1>

            {fields.map((field) => (
                <TextField
                    key={field.name}
                    label={field.label}
                    type={field.type}
                    register={register(field.name as Path<T>)}
                    error={errors[field.name as keyof T] as FieldError | undefined}
                />
            ))}

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <SubmitButton label={isPending ? "Loading..." : submitLabel || title} disabled={isPending} />
        </form>
    );
}
