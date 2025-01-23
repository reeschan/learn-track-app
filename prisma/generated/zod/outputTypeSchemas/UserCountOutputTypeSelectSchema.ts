import { z } from 'zod';
import type { Prisma } from '../..';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  summaries: z.boolean().optional(),
  chatHistories: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
