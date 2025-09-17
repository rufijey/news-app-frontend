import { TextField as MUITextField } from "@mui/material";
import type { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

interface TextFieldProps<T extends FieldValues> {
  label: string;
  type?: string;
  register: ReturnType<UseFormRegister<T>>;
  error?: FieldError;
}

export default function TextField<T extends FieldValues>({
  label,
  type = "text",
  register,
  error,
}: TextFieldProps<T>) {
  return (
    <div className="mb-3">
      <MUITextField
        label={label}
        type={type}
        fullWidth
        {...register}
        error={!!error}
        helperText={error?.message}
      />
    </div>
  );
}
