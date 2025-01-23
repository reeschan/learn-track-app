import { z } from 'zod';
import type { Prisma } from '../..';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const ChatGPTHistoryIncludeSchema: z.ZodType<Prisma.ChatGPTHistoryInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default ChatGPTHistoryIncludeSchema;
