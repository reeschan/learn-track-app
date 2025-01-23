import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryUncheckedCreateNestedManyWithoutCategoryInputSchema } from './SummaryCategoryUncheckedCreateNestedManyWithoutCategoryInputSchema';

export const CategoryUncheckedCreateInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  summaryCategories: z.lazy(() => SummaryCategoryUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryUncheckedCreateInput>;

export default CategoryUncheckedCreateInputSchema;
