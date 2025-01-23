import { z } from 'zod';
import type { Prisma } from '../..';
import { ChatGPTHistoryCreateManyInputSchema } from '../inputTypeSchemas/ChatGPTHistoryCreateManyInputSchema'

export const ChatGPTHistoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ChatGPTHistoryCreateManyAndReturnArgs> = z.object({
  data: z.union([ ChatGPTHistoryCreateManyInputSchema,ChatGPTHistoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ChatGPTHistoryCreateManyAndReturnArgs>;

export default ChatGPTHistoryCreateManyAndReturnArgsSchema;
