import { z } from 'zod';
import type { Prisma } from '../..';
import { ChatGPTHistoryWhereInputSchema } from '../inputTypeSchemas/ChatGPTHistoryWhereInputSchema'
import { ChatGPTHistoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ChatGPTHistoryOrderByWithAggregationInputSchema'
import { ChatGPTHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/ChatGPTHistoryScalarFieldEnumSchema'
import { ChatGPTHistoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ChatGPTHistoryScalarWhereWithAggregatesInputSchema'

export const ChatGPTHistoryGroupByArgsSchema: z.ZodType<Prisma.ChatGPTHistoryGroupByArgs> = z.object({
  where: ChatGPTHistoryWhereInputSchema.optional(),
  orderBy: z.union([ ChatGPTHistoryOrderByWithAggregationInputSchema.array(),ChatGPTHistoryOrderByWithAggregationInputSchema ]).optional(),
  by: ChatGPTHistoryScalarFieldEnumSchema.array(),
  having: ChatGPTHistoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ChatGPTHistoryGroupByArgs>;

export default ChatGPTHistoryGroupByArgsSchema;
