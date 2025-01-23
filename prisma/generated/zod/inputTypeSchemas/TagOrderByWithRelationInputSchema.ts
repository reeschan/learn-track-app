import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SummaryTagOrderByRelationAggregateInputSchema } from './SummaryTagOrderByRelationAggregateInputSchema';

export const TagOrderByWithRelationInputSchema: z.ZodType<Prisma.TagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  summaryTags: z.lazy(() => SummaryTagOrderByRelationAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.TagOrderByWithRelationInput>;

export default TagOrderByWithRelationInputSchema;
