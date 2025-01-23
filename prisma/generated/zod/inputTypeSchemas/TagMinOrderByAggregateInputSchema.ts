import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TagMinOrderByAggregateInputSchema: z.ZodType<Prisma.TagMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.TagMinOrderByAggregateInput>;

export default TagMinOrderByAggregateInputSchema;
