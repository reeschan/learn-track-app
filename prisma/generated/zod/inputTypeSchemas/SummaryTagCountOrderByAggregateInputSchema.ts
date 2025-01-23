import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SummaryTagCountOrderByAggregateInputSchema: z.ZodType<Prisma.SummaryTagCountOrderByAggregateInput> = z.object({
  summaryId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryTagCountOrderByAggregateInput>;

export default SummaryTagCountOrderByAggregateInputSchema;
