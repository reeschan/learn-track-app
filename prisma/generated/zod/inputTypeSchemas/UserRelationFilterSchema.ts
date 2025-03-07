import type { Prisma } from '../..';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.UserRelationFilter>;

export default UserRelationFilterSchema;
