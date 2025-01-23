import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SummaryCategoryCountOrderByAggregateInputSchema } from './SummaryCategoryCountOrderByAggregateInputSchema';
import { SummaryCategoryMaxOrderByAggregateInputSchema } from './SummaryCategoryMaxOrderByAggregateInputSchema';
import { SummaryCategoryMinOrderByAggregateInputSchema } from './SummaryCategoryMinOrderByAggregateInputSchema';

export const SummaryCategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.SummaryCategoryOrderByWithAggregationInput> = z.object({
  summaryId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SummaryCategoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SummaryCategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SummaryCategoryMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryOrderByWithAggregationInput>;

export default SummaryCategoryOrderByWithAggregationInputSchema;
