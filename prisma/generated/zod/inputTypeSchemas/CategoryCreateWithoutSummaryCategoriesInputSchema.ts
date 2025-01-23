import type { Prisma } from '../..';

import { z } from 'zod';

export const CategoryCreateWithoutSummaryCategoriesInputSchema: z.ZodType<Prisma.CategoryCreateWithoutSummaryCategoriesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.CategoryCreateWithoutSummaryCategoriesInput>;

export default CategoryCreateWithoutSummaryCategoriesInputSchema;
