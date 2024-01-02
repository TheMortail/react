import { z } from 'zod';

export const validationSchema = z.object({
  quantity: z.coerce.number().gte(1, 'Minimum 1'),
});

export type ValidationSchema = z.infer<typeof validationSchema>;
export const schemaFormDefaultValue = {
  quantity: 1,
};
