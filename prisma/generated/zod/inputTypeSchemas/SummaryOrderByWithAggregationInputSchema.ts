import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SummaryCountOrderByAggregateInputSchema } from './SummaryCountOrderByAggregateInputSchema';
import { SummaryMaxOrderByAggregateInputSchema } from './SummaryMaxOrderByAggregateInputSchema';
import { SummaryMinOrderByAggregateInputSchema } from './SummaryMinOrderByAggregateInputSchema';

export const SummaryOrderByWithAggregationInputSchema: z.ZodType<Prisma.SummaryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  summary: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SummaryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SummaryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SummaryMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryOrderByWithAggregationInput>;

export default SummaryOrderByWithAggregationInputSchema;
