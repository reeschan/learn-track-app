import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SummaryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SummaryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryOrderByRelationAggregateInput>;

export default SummaryOrderByRelationAggregateInputSchema;
