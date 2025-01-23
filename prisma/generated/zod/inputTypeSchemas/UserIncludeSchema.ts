import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryFindManyArgsSchema } from "../outputTypeSchemas/SummaryFindManyArgsSchema"
import { ChatGPTHistoryFindManyArgsSchema } from "../outputTypeSchemas/ChatGPTHistoryFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  summaries: z.union([z.boolean(),z.lazy(() => SummaryFindManyArgsSchema)]).optional(),
  chatHistories: z.union([z.boolean(),z.lazy(() => ChatGPTHistoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserIncludeSchema;
