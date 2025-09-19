import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("This is not a valid email."),
  password: z.string().min(6, "Minimum 6 characters"),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;
