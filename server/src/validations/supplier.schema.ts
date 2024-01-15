import { z } from "zod";

export const supplierCreateSchema = z.object({
    email: z
        .string({
            required_error: "Email field is required",
        })
        .email({
            message: "Please enter a valid email address.",
        }),
    password: z
        .string({
            required_error: "Password field is required",
        })
        .min(6, "Password must be at least 6 characters."),
});
