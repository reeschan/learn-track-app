import type { Prisma } from '../..';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutChatHistoriesInputSchema } from './UserUpdateWithoutChatHistoriesInputSchema';
import { UserUncheckedUpdateWithoutChatHistoriesInputSchema } from './UserUncheckedUpdateWithoutChatHistoriesInputSchema';

export const UserUpdateToOneWithWhereWithoutChatHistoriesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutChatHistoriesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutChatHistoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutChatHistoriesInputSchema) ]),
}).strict() as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutChatHistoriesInput>;

export default UserUpdateToOneWithWhereWithoutChatHistoriesInputSchema;
