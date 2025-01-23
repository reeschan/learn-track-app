import type { Prisma } from '../..';

import { z } from 'zod';
import { ChatGPTHistoryCreateManyUserInputSchema } from './ChatGPTHistoryCreateManyUserInputSchema';

export const ChatGPTHistoryCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ChatGPTHistoryCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ChatGPTHistoryCreateManyUserInputSchema),z.lazy(() => ChatGPTHistoryCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.ChatGPTHistoryCreateManyUserInputEnvelope>;

export default ChatGPTHistoryCreateManyUserInputEnvelopeSchema;
