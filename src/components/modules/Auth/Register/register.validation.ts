import { z } from "zod";
export const registerValidation = z.object({
    name: z.string().min(1, "Full Name is required"),
    identifier: z
        .string()
        .min(1, "Email or Phone is required")
        .refine((val) =>
            /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val) || /^[0-9]{10,15}$/.test(val),
            { message: "Invalid email or phone number" }
        ),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });