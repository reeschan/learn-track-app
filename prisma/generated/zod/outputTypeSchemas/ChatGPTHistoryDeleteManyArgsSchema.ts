import { z } from 'zod';
import type { Prisma } from '../..';
import { ChatGPTHistoryWhereInputSchema } from '../inputTypeSchemas/ChatGPTHistoryWhereInputSchema'

export const ChatGPTHistoryDeleteManyArgsSchema: z.ZodType<Prisma.ChatGPTHistoryDeleteManyArgs> = z.object({
  where: ChatGPTHistoryWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ChatGPTHistoryDeleteManyArgs>;

export default ChatGPTHistoryDeleteManyArgsSchema;
