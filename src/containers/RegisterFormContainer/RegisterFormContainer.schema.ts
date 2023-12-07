import { z } from 'zod';

export const validationSchema = z
  .object({
    username: z.string().min(1, { message: 'Username is required' }),
    email: z.string().min(1, { message: 'Email is required' }).email({
      message: 'Must be a valid email',
    }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),
    passwordAgain: z
      .string()
      .min(1, { message: 'Confirm Password is required' }),
    accept: z.literal<boolean>(true, {
      errorMap: () => ({
        message: 'You must agree with the Terms and Conditions',
      }),
    }),
  })
  .refine((data) => data.password === data.passwordAgain, {
    path: ['passwordAgain'],
    message: "Password don't match",
  });

export type ValidationSchema = z.infer<typeof validationSchema>;
export const schemaFormDefaultValue = {
  username: '',
  email: '',
  password: '',
  passwordAgain: '',
  accept: false,
};
