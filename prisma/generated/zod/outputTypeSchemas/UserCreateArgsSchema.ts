import { z } from 'zod';
import type { Prisma } from '../..';
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema'
import { UserCreateInputSchema } from '../inputTypeSchemas/UserCreateInputSchema'
import { UserUncheckedCreateInputSchema } from '../inputTypeSchemas/UserUncheckedCreateInputSchema'
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

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.UserCreateArgs>;

export default UserCreateArgsSchema;
