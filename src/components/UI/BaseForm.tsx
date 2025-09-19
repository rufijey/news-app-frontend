import type { ReactNode, FormHTMLAttributes } from "react";
import SubmitButton from "./SubmitButton";

interface BaseFormProps extends FormHTMLAttributes<HTMLFormElement> {
    title: string;
    children: ReactNode;
    isPending?: boolean;
    submitLabel?: string;
    errorMessage?: string;
}

export interface FieldConfig<T> {
    name: keyof T;
    label: string;
    type?: string;
}

export default function BaseForm({
                                     title,
                                     children,
                                     isPending,
                                     submitLabel,
                                     errorMessage,
                                     ...props
                                 }: BaseFormProps) {
    return (
        <form
            {...props}
            className="bg-white dark:bg-gray-600 p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
        >
            <h1 className="text-2xl font-heading mb-4 text-primary">{title}</h1>

            {children}

            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

            <SubmitButton label={isPending ? "Loading..." : submitLabel || "Submit"} disabled={isPending} />
        </form>
    );
}