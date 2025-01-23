import type { Prisma } from '../..';

import { z } from 'zod';

export const CategoryCreateManyInputSchema: z.ZodType<Prisma.CategoryCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.CategoryCreateManyInput>;

export default CategoryCreateManyInputSchema;
