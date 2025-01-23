import type { Prisma } from '../..';

import { z } from 'zod';
import { ChatGPTHistoryUncheckedCreateNestedManyWithoutUserInputSchema } from './ChatGPTHistoryUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutSummariesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSummariesInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastLogin: z.coerce.date().optional().nullable(),
  chatHistories: z.lazy(() => ChatGPTHistoryUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict() as z.ZodType<Prisma.UserUncheckedCreateWithoutSummariesInput>;

export default UserUncheckedCreateWithoutSummariesInputSchema;
