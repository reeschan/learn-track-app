import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SummaryTagOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SummaryTagOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryTagOrderByRelationAggregateInput>;

export default SummaryTagOrderByRelationAggregateInputSchema;
