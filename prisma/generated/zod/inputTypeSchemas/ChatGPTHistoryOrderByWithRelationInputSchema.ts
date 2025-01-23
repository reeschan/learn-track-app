import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';

export const ChatGPTHistoryOrderByWithRelationInputSchema: z.ZodType<Prisma.ChatGPTHistoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  summary: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict() as z.ZodType<Prisma.ChatGPTHistoryOrderByWithRelationInput>;

export default ChatGPTHistoryOrderByWithRelationInputSchema;
