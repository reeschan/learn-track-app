import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TagCountOrderByAggregateInputSchema } from './TagCountOrderByAggregateInputSchema';
import { TagMaxOrderByAggregateInputSchema } from './TagMaxOrderByAggregateInputSchema';
import { TagMinOrderByAggregateInputSchema } from './TagMinOrderByAggregateInputSchema';

export const TagOrderByWithAggregationInputSchema: z.ZodType<Prisma.TagOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TagCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TagMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.TagOrderByWithAggregationInput>;

export default TagOrderByWithAggregationInputSchema;
