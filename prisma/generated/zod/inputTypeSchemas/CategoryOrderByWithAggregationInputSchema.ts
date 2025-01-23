import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CategoryCountOrderByAggregateInputSchema } from './CategoryCountOrderByAggregateInputSchema';
import { CategoryMaxOrderByAggregateInputSchema } from './CategoryMaxOrderByAggregateInputSchema';
import { CategoryMinOrderByAggregateInputSchema } from './CategoryMinOrderByAggregateInputSchema';

export const CategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.CategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CategoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CategoryMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryOrderByWithAggregationInput>;

export default CategoryOrderByWithAggregationInputSchema;
