import type { Prisma } from '../..';

import { z } from 'zod';
import { UserUpdateWithoutSummariesInputSchema } from './UserUpdateWithoutSummariesInputSchema';
import { UserUncheckedUpdateWithoutSummariesInputSchema } from './UserUncheckedUpdateWithoutSummariesInputSchema';
import { UserCreateWithoutSummariesInputSchema } from './UserCreateWithoutSummariesInputSchema';
import { UserUncheckedCreateWithoutSummariesInputSchema } from './UserUncheckedCreateWithoutSummariesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutSummariesInputSchema: z.ZodType<Prisma.UserUpsertWithoutSummariesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSummariesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSummariesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSummariesInputSchema),z.lazy(() => UserUncheckedCreateWithoutSummariesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.UserUpsertWithoutSummariesInput>;

export default UserUpsertWithoutSummariesInputSchema;
