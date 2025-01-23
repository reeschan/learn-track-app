import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ChatGPTHistoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.ChatGPTHistoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  summary: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ChatGPTHistoryMinOrderByAggregateInput>;

export default ChatGPTHistoryMinOrderByAggregateInputSchema;
