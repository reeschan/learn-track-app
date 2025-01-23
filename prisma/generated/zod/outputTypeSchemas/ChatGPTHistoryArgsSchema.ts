import { z } from 'zod';
import type { Prisma } from '../..';
import { ChatGPTHistorySelectSchema } from '../inputTypeSchemas/ChatGPTHistorySelectSchema';
import { ChatGPTHistoryIncludeSchema } from '../inputTypeSchemas/ChatGPTHistoryIncludeSchema';

export const ChatGPTHistoryArgsSchema: z.ZodType<Prisma.ChatGPTHistoryDefaultArgs> = z.object({
  select: z.lazy(() => ChatGPTHistorySelectSchema).optional(),
  include: z.lazy(() => ChatGPTHistoryIncludeSchema).optional(),
}).strict();

export default ChatGPTHistoryArgsSchema;
