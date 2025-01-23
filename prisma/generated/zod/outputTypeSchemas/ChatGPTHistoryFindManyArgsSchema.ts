import { z } from 'zod';
import type { Prisma } from '../..';
import { ChatGPTHistoryIncludeSchema } from '../inputTypeSchemas/ChatGPTHistoryIncludeSchema'
import { ChatGPTHistoryWhereInputSchema } from '../inputTypeSchemas/ChatGPTHistoryWhereInputSchema'
import { ChatGPTHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/ChatGPTHistoryOrderByWithRelationInputSchema'
import { ChatGPTHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/ChatGPTHistoryWhereUniqueInputSchema'
import { ChatGPTHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/ChatGPTHistoryScalarFieldEnumSchema'
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

export const ChatGPTHistoryFindManyArgsSchema: z.ZodType<Prisma.ChatGPTHistoryFindManyArgs> = z.object({
  select: ChatGPTHistorySelectSchema.optional(),
  include: ChatGPTHistoryIncludeSchema.optional(),
  where: ChatGPTHistoryWhereInputSchema.optional(),
  orderBy: z.union([ ChatGPTHistoryOrderByWithRelationInputSchema.array(),ChatGPTHistoryOrderByWithRelationInputSchema ]).optional(),
  cursor: ChatGPTHistoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChatGPTHistoryScalarFieldEnumSchema,ChatGPTHistoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.ChatGPTHistoryFindManyArgs>;

export default ChatGPTHistoryFindManyArgsSchema;
