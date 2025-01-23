import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryUncheckedCreateNestedManyWithoutUserInputSchema } from './SummaryUncheckedCreateNestedManyWithoutUserInputSchema';
import { ChatGPTHistoryUncheckedCreateNestedManyWithoutUserInputSchema } from './ChatGPTHistoryUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastLogin: z.coerce.date().optional().nullable(),
  summaries: z.lazy(() => SummaryUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  chatHistories: z.lazy(() => ChatGPTHistoryUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict() as z.ZodType<Prisma.UserUncheckedCreateInput>;

export default UserUncheckedCreateInputSchema;
