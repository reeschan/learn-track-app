import { z } from 'zod';
import type { Prisma } from '../..';
import { ChatGPTHistoryCreateManyInputSchema } from '../inputTypeSchemas/ChatGPTHistoryCreateManyInputSchema'

export const ChatGPTHistoryCreateManyArgsSchema: z.ZodType<Prisma.ChatGPTHistoryCreateManyArgs> = z.object({
  data: z.union([ ChatGPTHistoryCreateManyInputSchema,ChatGPTHistoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ChatGPTHistoryCreateManyArgs>;

export default ChatGPTHistoryCreateManyArgsSchema;
