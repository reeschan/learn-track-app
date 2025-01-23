import { z } from 'zod';
import type { Prisma } from '../..';
import { ChatGPTHistoryIncludeSchema } from '../inputTypeSchemas/ChatGPTHistoryIncludeSchema'
import { ChatGPTHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/ChatGPTHistoryWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ChatGPTHistorySelectSchema: z.ZodType<Prisma.ChatGPTHistorySelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  summary: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const ChatGPTHistoryDeleteArgsSchema: z.ZodType<Prisma.ChatGPTHistoryDeleteArgs> = z.object({
  select: ChatGPTHistorySelectSchema.optional(),
  include: ChatGPTHistoryIncludeSchema.optional(),
  where: ChatGPTHistoryWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ChatGPTHistoryDeleteArgs>;

export default ChatGPTHistoryDeleteArgsSchema;
