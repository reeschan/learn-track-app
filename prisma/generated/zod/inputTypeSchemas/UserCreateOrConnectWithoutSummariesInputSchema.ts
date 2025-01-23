import type { Prisma } from '../..';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutSummariesInputSchema } from './UserCreateWithoutSummariesInputSchema';
import { UserUncheckedCreateWithoutSummariesInputSchema } from './UserUncheckedCreateWithoutSummariesInputSchema';

export const UserCreateOrConnectWithoutSummariesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSummariesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSummariesInputSchema),z.lazy(() => UserUncheckedCreateWithoutSummariesInputSchema) ]),
}).strict() as z.ZodType<Prisma.UserCreateOrConnectWithoutSummariesInput>;

export default UserCreateOrConnectWithoutSummariesInputSchema;
