import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCreateNestedManyWithoutUserInputSchema } from './SummaryCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutChatHistoriesInputSchema: z.ZodType<Prisma.UserCreateWithoutChatHistoriesInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastLogin: z.coerce.date().optional().nullable(),
  summaries: z.lazy(() => SummaryCreateNestedManyWithoutUserInputSchema).optional()
}).strict() as z.ZodType<Prisma.UserCreateWithoutChatHistoriesInput>;

export default UserCreateWithoutChatHistoriesInputSchema;
