import { z } from 'zod';
import type { Prisma } from '../..';
import { ChatGPTHistoryWhereInputSchema } from '../inputTypeSchemas/ChatGPTHistoryWhereInputSchema'
import { ChatGPTHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/ChatGPTHistoryOrderByWithRelationInputSchema'
import { ChatGPTHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/ChatGPTHistoryWhereUniqueInputSchema'

export const ChatGPTHistoryAggregateArgsSchema: z.ZodType<Prisma.ChatGPTHistoryAggregateArgs> = z.object({
  where: ChatGPTHistoryWhereInputSchema.optional(),
  orderBy: z.union([ ChatGPTHistoryOrderByWithRelationInputSchema.array(),ChatGPTHistoryOrderByWithRelationInputSchema ]).optional(),
  cursor: ChatGPTHistoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ChatGPTHistoryAggregateArgs>;

export default ChatGPTHistoryAggregateArgsSchema;
