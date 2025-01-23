import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SummaryOrderByRelationAggregateInputSchema } from './SummaryOrderByRelationAggregateInputSchema';
import { ChatGPTHistoryOrderByRelationAggregateInputSchema } from './ChatGPTHistoryOrderByRelationAggregateInputSchema';

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  passwordHash: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lastLogin: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  summaries: z.lazy(() => SummaryOrderByRelationAggregateInputSchema).optional(),
  chatHistories: z.lazy(() => ChatGPTHistoryOrderByRelationAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.UserOrderByWithRelationInput>;

export default UserOrderByWithRelationInputSchema;
