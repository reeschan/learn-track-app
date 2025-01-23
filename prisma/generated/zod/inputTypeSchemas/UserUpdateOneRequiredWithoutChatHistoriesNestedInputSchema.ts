import type { Prisma } from '../..';

import { z } from 'zod';
import { UserCreateWithoutChatHistoriesInputSchema } from './UserCreateWithoutChatHistoriesInputSchema';
import { UserUncheckedCreateWithoutChatHistoriesInputSchema } from './UserUncheckedCreateWithoutChatHistoriesInputSchema';
import { UserCreateOrConnectWithoutChatHistoriesInputSchema } from './UserCreateOrConnectWithoutChatHistoriesInputSchema';
import { UserUpsertWithoutChatHistoriesInputSchema } from './UserUpsertWithoutChatHistoriesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutChatHistoriesInputSchema } from './UserUpdateToOneWithWhereWithoutChatHistoriesInputSchema';
import { UserUpdateWithoutChatHistoriesInputSchema } from './UserUpdateWithoutChatHistoriesInputSchema';
import { UserUncheckedUpdateWithoutChatHistoriesInputSchema } from './UserUncheckedUpdateWithoutChatHistoriesInputSchema';

export const UserUpdateOneRequiredWithoutChatHistoriesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutChatHistoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutChatHistoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutChatHistoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutChatHistoriesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutChatHistoriesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutChatHistoriesInputSchema),z.lazy(() => UserUpdateWithoutChatHistoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutChatHistoriesInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.UserUpdateOneRequiredWithoutChatHistoriesNestedInput>;

export default UserUpdateOneRequiredWithoutChatHistoriesNestedInputSchema;
