import type { Prisma } from '../..';

import { z } from 'zod';

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastLogin: z.coerce.date().optional().nullable()
}).strict() as z.ZodType<Prisma.UserCreateManyInput>;

export default UserCreateManyInputSchema;
