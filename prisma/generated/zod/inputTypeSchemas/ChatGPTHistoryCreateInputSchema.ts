import type { Prisma } from '../..';

import { z } from 'zod';
import { UserCreateNestedOneWithoutChatHistoriesInputSchema } from './UserCreateNestedOneWithoutChatHistoriesInputSchema';

export const ChatGPTHistoryCreateInputSchema: z.ZodType<Prisma.ChatGPTHistoryCreateInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  summary: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutChatHistoriesInputSchema)
}).strict() as z.ZodType<Prisma.ChatGPTHistoryCreateInput>;

export default ChatGPTHistoryCreateInputSchema;
