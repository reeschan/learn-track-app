import { z } from 'zod';
import type { Prisma } from '../..';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

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

export default ChatGPTHistorySelectSchema;
