import type { Prisma } from '../..';

import { z } from 'zod';
import { UserCreateWithoutChatHistoriesInputSchema } from './UserCreateWithoutChatHistoriesInputSchema';
import { UserUncheckedCreateWithoutChatHistoriesInputSchema } from './UserUncheckedCreateWithoutChatHistoriesInputSchema';
import { UserCreateOrConnectWithoutChatHistoriesInputSchema } from './UserCreateOrConnectWithoutChatHistoriesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutChatHistoriesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutChatHistoriesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutChatHistoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutChatHistoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutChatHistoriesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.UserCreateNestedOneWithoutChatHistoriesInput>;

export default UserCreateNestedOneWithoutChatHistoriesInputSchema;
