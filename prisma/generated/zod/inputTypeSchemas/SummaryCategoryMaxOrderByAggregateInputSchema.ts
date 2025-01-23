import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SummaryCategoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SummaryCategoryMaxOrderByAggregateInput> = z.object({
  summaryId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryMaxOrderByAggregateInput>;

export default SummaryCategoryMaxOrderByAggregateInputSchema;
