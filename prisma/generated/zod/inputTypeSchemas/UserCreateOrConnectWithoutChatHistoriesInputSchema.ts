import type { Prisma } from '../..';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutChatHistoriesInputSchema } from './UserCreateWithoutChatHistoriesInputSchema';
import { UserUncheckedCreateWithoutChatHistoriesInputSchema } from './UserUncheckedCreateWithoutChatHistoriesInputSchema';

export const UserCreateOrConnectWithoutChatHistoriesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutChatHistoriesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutChatHistoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutChatHistoriesInputSchema) ]),
}).strict() as z.ZodType<Prisma.UserCreateOrConnectWithoutChatHistoriesInput>;

export default UserCreateOrConnectWithoutChatHistoriesInputSchema;
