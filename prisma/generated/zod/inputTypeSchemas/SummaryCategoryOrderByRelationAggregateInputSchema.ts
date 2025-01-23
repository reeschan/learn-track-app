import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SummaryCategoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SummaryCategoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryOrderByRelationAggregateInput>;

export default SummaryCategoryOrderByRelationAggregateInputSchema;
