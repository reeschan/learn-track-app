import { z } from 'zod';

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.coerce.date(),
})

export type Category = z.infer<typeof CategorySchema>

export default CategorySchema;
