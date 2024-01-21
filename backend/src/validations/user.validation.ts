import { z } from "zod";

const User = z.object({
    useranme: z
        .string({
            required_error: "Username is required",
            invalid_type_error: "Username must be a string",
        })
        .min(3, "Username must be at least 3 characters"),

    email: z
        .string({
            required_error: "Email is required",
        })
        .email("Enter a valid email"),

    password: z
        .string({
            required_error: "Password is required",
        })
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,}$/,
            "A password must be at least 8 characters long, must contain a capital letter, a lowercase letter and a special character"
        ),
});
