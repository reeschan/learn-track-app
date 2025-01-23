import { z } from 'zod';
import type { Prisma } from '../..';
import { ChatGPTHistoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/ChatGPTHistoryUpdateManyMutationInputSchema'
import { ChatGPTHistoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ChatGPTHistoryUncheckedUpdateManyInputSchema'
import { ChatGPTHistoryWhereInputSchema } from '../inputTypeSchemas/ChatGPTHistoryWhereInputSchema'

export const ChatGPTHistoryUpdateManyArgsSchema: z.ZodType<Prisma.ChatGPTHistoryUpdateManyArgs> = z.object({
  data: z.union([ ChatGPTHistoryUpdateManyMutationInputSchema,ChatGPTHistoryUncheckedUpdateManyInputSchema ]),
  where: ChatGPTHistoryWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ChatGPTHistoryUpdateManyArgs>;

export default ChatGPTHistoryUpdateManyArgsSchema;
