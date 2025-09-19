import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/auth/useLogin";
import {type LoginFormInputs, loginSchema} from "../../schemas/loginSchema";
import Form, { type FormField } from "../UI/Form";

export default function LoginForm() {
  const navigate = useNavigate();
  const { mutate: login, isPending, error } = useLogin(navigate);

  const fields: FormField[] = [
    { name: "email", label: "Email" },
    { name: "password", label: "Password", type: "password" },
  ];

  const onSubmit = (data: LoginFormInputs) => {
    login(data);
  };

  return (
      <Form
          title="Login"
          schema={loginSchema}
          fields={fields}
          onSubmit={onSubmit}
          isPending={isPending}
          error={error ? "Login failed" : undefined}
          submitLabel="Login"
      />
  );
}
