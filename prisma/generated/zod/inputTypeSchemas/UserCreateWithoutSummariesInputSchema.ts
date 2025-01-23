import type { Prisma } from '../..';

import { z } from 'zod';
import { ChatGPTHistoryCreateNestedManyWithoutUserInputSchema } from './ChatGPTHistoryCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutSummariesInputSchema: z.ZodType<Prisma.UserCreateWithoutSummariesInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastLogin: z.coerce.date().optional().nullable(),
  chatHistories: z.lazy(() => ChatGPTHistoryCreateNestedManyWithoutUserInputSchema).optional()
}).strict() as z.ZodType<Prisma.UserCreateWithoutSummariesInput>;

export default UserCreateWithoutSummariesInputSchema;
