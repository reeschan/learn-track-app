import type { Prisma } from '../..';

import { z } from 'zod';
import { UserCreateWithoutSummariesInputSchema } from './UserCreateWithoutSummariesInputSchema';
import { UserUncheckedCreateWithoutSummariesInputSchema } from './UserUncheckedCreateWithoutSummariesInputSchema';
import { UserCreateOrConnectWithoutSummariesInputSchema } from './UserCreateOrConnectWithoutSummariesInputSchema';
import { UserUpsertWithoutSummariesInputSchema } from './UserUpsertWithoutSummariesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutSummariesInputSchema } from './UserUpdateToOneWithWhereWithoutSummariesInputSchema';
import { UserUpdateWithoutSummariesInputSchema } from './UserUpdateWithoutSummariesInputSchema';
import { UserUncheckedUpdateWithoutSummariesInputSchema } from './UserUncheckedUpdateWithoutSummariesInputSchema';

export const UserUpdateOneRequiredWithoutSummariesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSummariesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSummariesInputSchema),z.lazy(() => UserUncheckedCreateWithoutSummariesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSummariesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSummariesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSummariesInputSchema),z.lazy(() => UserUpdateWithoutSummariesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSummariesInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.UserUpdateOneRequiredWithoutSummariesNestedInput>;

export default UserUpdateOneRequiredWithoutSummariesNestedInputSchema;
