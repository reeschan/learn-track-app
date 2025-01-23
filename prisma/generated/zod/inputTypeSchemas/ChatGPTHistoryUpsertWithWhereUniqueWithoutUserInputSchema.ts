import type { Prisma } from '../..';

import { z } from 'zod';
import { ChatGPTHistoryWhereUniqueInputSchema } from './ChatGPTHistoryWhereUniqueInputSchema';
import { ChatGPTHistoryUpdateWithoutUserInputSchema } from './ChatGPTHistoryUpdateWithoutUserInputSchema';
import { ChatGPTHistoryUncheckedUpdateWithoutUserInputSchema } from './ChatGPTHistoryUncheckedUpdateWithoutUserInputSchema';
import { ChatGPTHistoryCreateWithoutUserInputSchema } from './ChatGPTHistoryCreateWithoutUserInputSchema';
import { ChatGPTHistoryUncheckedCreateWithoutUserInputSchema } from './ChatGPTHistoryUncheckedCreateWithoutUserInputSchema';

export const ChatGPTHistoryUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ChatGPTHistoryUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ChatGPTHistoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ChatGPTHistoryUpdateWithoutUserInputSchema),z.lazy(() => ChatGPTHistoryUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ChatGPTHistoryCreateWithoutUserInputSchema),z.lazy(() => ChatGPTHistoryUncheckedCreateWithoutUserInputSchema) ]),
}).strict() as z.ZodType<Prisma.ChatGPTHistoryUpsertWithWhereUniqueWithoutUserInput>;

export default ChatGPTHistoryUpsertWithWhereUniqueWithoutUserInputSchema;
