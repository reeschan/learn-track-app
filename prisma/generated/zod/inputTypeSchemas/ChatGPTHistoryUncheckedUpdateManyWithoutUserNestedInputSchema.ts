import type { Prisma } from '../..';

import { z } from 'zod';
import { ChatGPTHistoryCreateWithoutUserInputSchema } from './ChatGPTHistoryCreateWithoutUserInputSchema';
import { ChatGPTHistoryUncheckedCreateWithoutUserInputSchema } from './ChatGPTHistoryUncheckedCreateWithoutUserInputSchema';
import { ChatGPTHistoryCreateOrConnectWithoutUserInputSchema } from './ChatGPTHistoryCreateOrConnectWithoutUserInputSchema';
import { ChatGPTHistoryUpsertWithWhereUniqueWithoutUserInputSchema } from './ChatGPTHistoryUpsertWithWhereUniqueWithoutUserInputSchema';
import { ChatGPTHistoryCreateManyUserInputEnvelopeSchema } from './ChatGPTHistoryCreateManyUserInputEnvelopeSchema';
import { ChatGPTHistoryWhereUniqueInputSchema } from './ChatGPTHistoryWhereUniqueInputSchema';
import { ChatGPTHistoryUpdateWithWhereUniqueWithoutUserInputSchema } from './ChatGPTHistoryUpdateWithWhereUniqueWithoutUserInputSchema';
import { ChatGPTHistoryUpdateManyWithWhereWithoutUserInputSchema } from './ChatGPTHistoryUpdateManyWithWhereWithoutUserInputSchema';
import { ChatGPTHistoryScalarWhereInputSchema } from './ChatGPTHistoryScalarWhereInputSchema';

export const ChatGPTHistoryUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ChatGPTHistoryUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChatGPTHistoryCreateWithoutUserInputSchema),z.lazy(() => ChatGPTHistoryCreateWithoutUserInputSchema).array(),z.lazy(() => ChatGPTHistoryUncheckedCreateWithoutUserInputSchema),z.lazy(() => ChatGPTHistoryUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChatGPTHistoryCreateOrConnectWithoutUserInputSchema),z.lazy(() => ChatGPTHistoryCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChatGPTHistoryUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ChatGPTHistoryUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ChatGPTHistoryCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ChatGPTHistoryWhereUniqueInputSchema),z.lazy(() => ChatGPTHistoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChatGPTHistoryWhereUniqueInputSchema),z.lazy(() => ChatGPTHistoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChatGPTHistoryWhereUniqueInputSchema),z.lazy(() => ChatGPTHistoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChatGPTHistoryWhereUniqueInputSchema),z.lazy(() => ChatGPTHistoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChatGPTHistoryUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ChatGPTHistoryUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChatGPTHistoryUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ChatGPTHistoryUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChatGPTHistoryScalarWhereInputSchema),z.lazy(() => ChatGPTHistoryScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.ChatGPTHistoryUncheckedUpdateManyWithoutUserNestedInput>;

export default ChatGPTHistoryUncheckedUpdateManyWithoutUserNestedInputSchema;
