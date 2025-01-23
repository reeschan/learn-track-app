import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CategoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryMaxOrderByAggregateInput>;

export default CategoryMaxOrderByAggregateInputSchema;
