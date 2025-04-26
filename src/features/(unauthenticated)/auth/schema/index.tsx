import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().min(1, 'Email is required').email(),
    password: z.string().min(8, 'Minimum 8 characters'),
});

export type TCreateUserSchema = z.infer<typeof createUserSchema>;

export const loginSchema = z.object({
    email: z.string().min(1, 'Email is required').email(),
    password: z.string().min(8, 'Minimum 8 characters'),
});

export type TLoginSchema = z.infer<typeof loginSchema>;