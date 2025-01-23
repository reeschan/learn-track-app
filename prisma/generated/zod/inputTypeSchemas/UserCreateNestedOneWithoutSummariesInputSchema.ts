import type { Prisma } from '../..';

import { z } from 'zod';
import { UserCreateWithoutSummariesInputSchema } from './UserCreateWithoutSummariesInputSchema';
import { UserUncheckedCreateWithoutSummariesInputSchema } from './UserUncheckedCreateWithoutSummariesInputSchema';
import { UserCreateOrConnectWithoutSummariesInputSchema } from './UserCreateOrConnectWithoutSummariesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutSummariesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSummariesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSummariesInputSchema),z.lazy(() => UserUncheckedCreateWithoutSummariesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSummariesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.UserCreateNestedOneWithoutSummariesInput>;

export default UserCreateNestedOneWithoutSummariesInputSchema;
