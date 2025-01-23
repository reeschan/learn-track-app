import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SummaryTagCountOrderByAggregateInputSchema } from './SummaryTagCountOrderByAggregateInputSchema';
import { SummaryTagMaxOrderByAggregateInputSchema } from './SummaryTagMaxOrderByAggregateInputSchema';
import { SummaryTagMinOrderByAggregateInputSchema } from './SummaryTagMinOrderByAggregateInputSchema';

export const SummaryTagOrderByWithAggregationInputSchema: z.ZodType<Prisma.SummaryTagOrderByWithAggregationInput> = z.object({
  summaryId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SummaryTagCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SummaryTagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SummaryTagMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryTagOrderByWithAggregationInput>;

export default SummaryTagOrderByWithAggregationInputSchema;
