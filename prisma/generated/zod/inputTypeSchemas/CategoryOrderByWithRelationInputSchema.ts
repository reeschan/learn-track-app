import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SummaryCategoryOrderByRelationAggregateInputSchema } from './SummaryCategoryOrderByRelationAggregateInputSchema';

export const CategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  summaryCategories: z.lazy(() => SummaryCategoryOrderByRelationAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryOrderByWithRelationInput>;

export default CategoryOrderByWithRelationInputSchema;
