import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SummaryCategoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.SummaryCategoryCountOrderByAggregateInput> = z.object({
  summaryId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryCountOrderByAggregateInput>;

export default SummaryCategoryCountOrderByAggregateInputSchema;
