import { z } from "zod";

export const registerSchema = z.object({
    username: z.string().min(3, "Minimum 3 characters"),
    email: z.email("This is not a valid email."),
    password: z.string().min(6, "Minimum 6 characters"),
});

export type RegisterFormInputs = z.infer<typeof registerSchema>;
