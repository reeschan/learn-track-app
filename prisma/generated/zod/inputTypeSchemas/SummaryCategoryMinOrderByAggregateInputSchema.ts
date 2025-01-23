import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SummaryCategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.SummaryCategoryMinOrderByAggregateInput> = z.object({
  summaryId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryMinOrderByAggregateInput>;

export default SummaryCategoryMinOrderByAggregateInputSchema;
