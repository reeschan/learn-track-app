import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryCreateNestedManyWithoutCategoryInputSchema } from './SummaryCategoryCreateNestedManyWithoutCategoryInputSchema';

export const CategoryCreateInputSchema: z.ZodType<Prisma.CategoryCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  summaryCategories: z.lazy(() => SummaryCategoryCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryCreateInput>;

export default CategoryCreateInputSchema;
