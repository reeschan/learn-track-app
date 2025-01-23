import type { Prisma } from '../..';

import { z } from 'zod';
import { ChatGPTHistoryWhereInputSchema } from './ChatGPTHistoryWhereInputSchema';

export const ChatGPTHistoryListRelationFilterSchema: z.ZodType<Prisma.ChatGPTHistoryListRelationFilter> = z.object({
  every: z.lazy(() => ChatGPTHistoryWhereInputSchema).optional(),
  some: z.lazy(() => ChatGPTHistoryWhereInputSchema).optional(),
  none: z.lazy(() => ChatGPTHistoryWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.ChatGPTHistoryListRelationFilter>;

export default ChatGPTHistoryListRelationFilterSchema;
