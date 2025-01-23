import type { Prisma } from '../..';

import { z } from 'zod';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { SummaryCategoryListRelationFilterSchema } from './SummaryCategoryListRelationFilterSchema';

export const CategoryWhereUniqueInputSchema: z.ZodType<Prisma.CategoryWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    name: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  summaryCategories: z.lazy(() => SummaryCategoryListRelationFilterSchema).optional()
}).strict()) as z.ZodType<Prisma.CategoryWhereUniqueInput>;

export default CategoryWhereUniqueInputSchema;
