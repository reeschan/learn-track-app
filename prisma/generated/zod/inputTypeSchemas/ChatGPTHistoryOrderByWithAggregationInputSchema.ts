import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ChatGPTHistoryCountOrderByAggregateInputSchema } from './ChatGPTHistoryCountOrderByAggregateInputSchema';
import { ChatGPTHistoryMaxOrderByAggregateInputSchema } from './ChatGPTHistoryMaxOrderByAggregateInputSchema';
import { ChatGPTHistoryMinOrderByAggregateInputSchema } from './ChatGPTHistoryMinOrderByAggregateInputSchema';

export const ChatGPTHistoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.ChatGPTHistoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  summary: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ChatGPTHistoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ChatGPTHistoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ChatGPTHistoryMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.ChatGPTHistoryOrderByWithAggregationInput>;

export default ChatGPTHistoryOrderByWithAggregationInputSchema;
