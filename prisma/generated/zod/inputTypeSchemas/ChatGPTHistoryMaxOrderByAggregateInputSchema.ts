import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ChatGPTHistoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ChatGPTHistoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  summary: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ChatGPTHistoryMaxOrderByAggregateInput>;

export default ChatGPTHistoryMaxOrderByAggregateInputSchema;
