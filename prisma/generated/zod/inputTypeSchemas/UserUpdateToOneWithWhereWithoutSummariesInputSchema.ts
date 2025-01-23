import type { Prisma } from '../..';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutSummariesInputSchema } from './UserUpdateWithoutSummariesInputSchema';
import { UserUncheckedUpdateWithoutSummariesInputSchema } from './UserUncheckedUpdateWithoutSummariesInputSchema';

export const UserUpdateToOneWithWhereWithoutSummariesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSummariesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSummariesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSummariesInputSchema) ]),
}).strict() as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSummariesInput>;

export default UserUpdateToOneWithWhereWithoutSummariesInputSchema;
