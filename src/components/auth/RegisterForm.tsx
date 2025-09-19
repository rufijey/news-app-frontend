import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/auth/useRegister.ts";
import { type RegisterFormInputs, registerSchema } from "../../schemas/registerSchema";
import Form, { type FormField } from "../UI/Form";

export default function RegisterForm() {
  const navigate = useNavigate();
  const { mutate: registerUser, isPending, error } = useRegister(navigate);

  const fields: FormField[] = [
    { name: "username", label: "Username" },
    { name: "email", label: "Email" },
    { name: "password", label: "Password", type: "password" },
  ];

  const onSubmit = (data: RegisterFormInputs) => {
    registerUser(data);
  };

  return (
      <Form
          title="Register"
          schema={registerSchema}
          fields={fields}
          onSubmit={onSubmit}
          isPending={isPending}
          error={error ? "Registration failed" : undefined}
          submitLabel="Register"
      />
  );
}
