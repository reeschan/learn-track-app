import type { Prisma } from '../..';

import { z } from 'zod';
import { UserUpdateWithoutChatHistoriesInputSchema } from './UserUpdateWithoutChatHistoriesInputSchema';
import { UserUncheckedUpdateWithoutChatHistoriesInputSchema } from './UserUncheckedUpdateWithoutChatHistoriesInputSchema';
import { UserCreateWithoutChatHistoriesInputSchema } from './UserCreateWithoutChatHistoriesInputSchema';
import { UserUncheckedCreateWithoutChatHistoriesInputSchema } from './UserUncheckedCreateWithoutChatHistoriesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutChatHistoriesInputSchema: z.ZodType<Prisma.UserUpsertWithoutChatHistoriesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutChatHistoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutChatHistoriesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutChatHistoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutChatHistoriesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.UserUpsertWithoutChatHistoriesInput>;

export default UserUpsertWithoutChatHistoriesInputSchema;
