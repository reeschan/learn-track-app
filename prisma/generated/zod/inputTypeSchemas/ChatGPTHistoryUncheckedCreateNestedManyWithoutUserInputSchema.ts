import type { Prisma } from '../..';

import { z } from 'zod';
import { ChatGPTHistoryCreateWithoutUserInputSchema } from './ChatGPTHistoryCreateWithoutUserInputSchema';
import { ChatGPTHistoryUncheckedCreateWithoutUserInputSchema } from './ChatGPTHistoryUncheckedCreateWithoutUserInputSchema';
import { ChatGPTHistoryCreateOrConnectWithoutUserInputSchema } from './ChatGPTHistoryCreateOrConnectWithoutUserInputSchema';
import { ChatGPTHistoryCreateManyUserInputEnvelopeSchema } from './ChatGPTHistoryCreateManyUserInputEnvelopeSchema';
import { ChatGPTHistoryWhereUniqueInputSchema } from './ChatGPTHistoryWhereUniqueInputSchema';

export const ChatGPTHistoryUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ChatGPTHistoryUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ChatGPTHistoryCreateWithoutUserInputSchema),z.lazy(() => ChatGPTHistoryCreateWithoutUserInputSchema).array(),z.lazy(() => ChatGPTHistoryUncheckedCreateWithoutUserInputSchema),z.lazy(() => ChatGPTHistoryUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChatGPTHistoryCreateOrConnectWithoutUserInputSchema),z.lazy(() => ChatGPTHistoryCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChatGPTHistoryCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ChatGPTHistoryWhereUniqueInputSchema),z.lazy(() => ChatGPTHistoryWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.ChatGPTHistoryUncheckedCreateNestedManyWithoutUserInput>;

export default ChatGPTHistoryUncheckedCreateNestedManyWithoutUserInputSchema;
