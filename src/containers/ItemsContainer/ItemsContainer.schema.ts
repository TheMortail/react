import { z } from 'zod';

export const fieldArrayValidationSchema = z.object({
  cart: z.array(
    z.object({
      name: z.string().min(1, { message: 'Product name is required!' }),
      quantity: z.number().gte(1, { message: 'Must be above 1' }),
      price: z.number().gte(1, { message: 'Must be above 1' }),
    }),
  ),
});
export type FieldArrayFormValues = z.infer<typeof fieldArrayValidationSchema>;
