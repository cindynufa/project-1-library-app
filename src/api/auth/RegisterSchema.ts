import * as z from 'zod';

export const RegisterSchema = z
  .object({
    name: z.string().nonempty('Name is required'),
    email: z.string().email('Invalid email format'),
    phoneNumber: z.string().optional(),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password do not match',
    path: ['confirmPassword'],
  });

export type RegisterFormValues = z.infer<typeof RegisterSchema>;
