import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryUncheckedCreateNestedManyWithoutUserInputSchema } from './SummaryUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutChatHistoriesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutChatHistoriesInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastLogin: z.coerce.date().optional().nullable(),
  summaries: z.lazy(() => SummaryUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict() as z.ZodType<Prisma.UserUncheckedCreateWithoutChatHistoriesInput>;

export default UserUncheckedCreateWithoutChatHistoriesInputSchema;
