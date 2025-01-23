import type { Prisma } from '../..';

import { z } from 'zod';
import { ChatGPTHistoryWhereUniqueInputSchema } from './ChatGPTHistoryWhereUniqueInputSchema';
import { ChatGPTHistoryUpdateWithoutUserInputSchema } from './ChatGPTHistoryUpdateWithoutUserInputSchema';
import { ChatGPTHistoryUncheckedUpdateWithoutUserInputSchema } from './ChatGPTHistoryUncheckedUpdateWithoutUserInputSchema';

export const ChatGPTHistoryUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ChatGPTHistoryUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ChatGPTHistoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ChatGPTHistoryUpdateWithoutUserInputSchema),z.lazy(() => ChatGPTHistoryUncheckedUpdateWithoutUserInputSchema) ]),
}).strict() as z.ZodType<Prisma.ChatGPTHistoryUpdateWithWhereUniqueWithoutUserInput>;

export default ChatGPTHistoryUpdateWithWhereUniqueWithoutUserInputSchema;
