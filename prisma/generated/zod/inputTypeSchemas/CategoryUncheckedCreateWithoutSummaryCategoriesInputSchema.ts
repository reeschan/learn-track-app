import type { Prisma } from '../..';

import { z } from 'zod';

export const CategoryUncheckedCreateWithoutSummaryCategoriesInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutSummaryCategoriesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.CategoryUncheckedCreateWithoutSummaryCategoriesInput>;

export default CategoryUncheckedCreateWithoutSummaryCategoriesInputSchema;
