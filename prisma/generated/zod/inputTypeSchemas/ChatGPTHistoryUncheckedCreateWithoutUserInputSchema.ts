import type { Prisma } from '../..';

import { z } from 'zod';

export const ChatGPTHistoryUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ChatGPTHistoryUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  summary: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.ChatGPTHistoryUncheckedCreateWithoutUserInput>;

export default ChatGPTHistoryUncheckedCreateWithoutUserInputSchema;
