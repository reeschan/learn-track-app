import type { Prisma } from '../..';

import { z } from 'zod';
import { ChatGPTHistoryWhereUniqueInputSchema } from './ChatGPTHistoryWhereUniqueInputSchema';
import { ChatGPTHistoryCreateWithoutUserInputSchema } from './ChatGPTHistoryCreateWithoutUserInputSchema';
import { ChatGPTHistoryUncheckedCreateWithoutUserInputSchema } from './ChatGPTHistoryUncheckedCreateWithoutUserInputSchema';

export const ChatGPTHistoryCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ChatGPTHistoryCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ChatGPTHistoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChatGPTHistoryCreateWithoutUserInputSchema),z.lazy(() => ChatGPTHistoryUncheckedCreateWithoutUserInputSchema) ]),
}).strict() as z.ZodType<Prisma.ChatGPTHistoryCreateOrConnectWithoutUserInput>;

export default ChatGPTHistoryCreateOrConnectWithoutUserInputSchema;
