import type { Prisma } from '../..';

import { z } from 'zod';

export const ChatGPTHistoryCreateWithoutUserInputSchema: z.ZodType<Prisma.ChatGPTHistoryCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  summary: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.ChatGPTHistoryCreateWithoutUserInput>;

export default ChatGPTHistoryCreateWithoutUserInputSchema;
