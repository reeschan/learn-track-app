import { z } from 'zod';
import type { Prisma } from '../..';
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema'
import { UserWhereInputSchema } from '../inputTypeSchemas/UserWhereInputSchema'
import { UserOrderByWithRelationInputSchema } from '../inputTypeSchemas/UserOrderByWithRelationInputSchema'
import { UserWhereUniqueInputSchema } from '../inputTypeSchemas/UserWhereUniqueInputSchema'
import { UserScalarFieldEnumSchema } from '../inputTypeSchemas/UserScalarFieldEnumSchema'
import { SummaryFindManyArgsSchema } from "../outputTypeSchemas/SummaryFindManyArgsSchema"
import { ChatGPTHistoryFindManyArgsSchema } from "../outputTypeSchemas/ChatGPTHistoryFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  email: z.boolean().optional(),
  passwordHash: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  lastLogin: z.boolean().optional(),
  summaries: z.union([z.boolean(),z.lazy(() => SummaryFindManyArgsSchema)]).optional(),
  chatHistories: z.union([z.boolean(),z.lazy(() => ChatGPTHistoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.UserFindFirstArgs>;

export default UserFindFirstArgsSchema;
