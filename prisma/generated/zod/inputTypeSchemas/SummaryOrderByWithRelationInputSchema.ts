import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { SummaryTagOrderByRelationAggregateInputSchema } from './SummaryTagOrderByRelationAggregateInputSchema';
import { SummaryCategoryOrderByRelationAggregateInputSchema } from './SummaryCategoryOrderByRelationAggregateInputSchema';

export const SummaryOrderByWithRelationInputSchema: z.ZodType<Prisma.SummaryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  summary: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  tags: z.lazy(() => SummaryTagOrderByRelationAggregateInputSchema).optional(),
  categories: z.lazy(() => SummaryCategoryOrderByRelationAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryOrderByWithRelationInput>;

export default SummaryOrderByWithRelationInputSchema;
