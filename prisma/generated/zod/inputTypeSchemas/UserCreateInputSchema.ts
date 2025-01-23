import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCreateNestedManyWithoutUserInputSchema } from './SummaryCreateNestedManyWithoutUserInputSchema';
import { ChatGPTHistoryCreateNestedManyWithoutUserInputSchema } from './ChatGPTHistoryCreateNestedManyWithoutUserInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastLogin: z.coerce.date().optional().nullable(),
  summaries: z.lazy(() => SummaryCreateNestedManyWithoutUserInputSchema).optional(),
  chatHistories: z.lazy(() => ChatGPTHistoryCreateNestedManyWithoutUserInputSchema).optional()
}).strict() as z.ZodType<Prisma.UserCreateInput>;

export default UserCreateInputSchema;
