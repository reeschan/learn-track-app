import type { Prisma } from '../..';

import { z } from 'zod';
import { ChatGPTHistoryScalarWhereInputSchema } from './ChatGPTHistoryScalarWhereInputSchema';
import { ChatGPTHistoryUpdateManyMutationInputSchema } from './ChatGPTHistoryUpdateManyMutationInputSchema';
import { ChatGPTHistoryUncheckedUpdateManyWithoutUserInputSchema } from './ChatGPTHistoryUncheckedUpdateManyWithoutUserInputSchema';

export const ChatGPTHistoryUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ChatGPTHistoryUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ChatGPTHistoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ChatGPTHistoryUpdateManyMutationInputSchema),z.lazy(() => ChatGPTHistoryUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict() as z.ZodType<Prisma.ChatGPTHistoryUpdateManyWithWhereWithoutUserInput>;

export default ChatGPTHistoryUpdateManyWithWhereWithoutUserInputSchema;
