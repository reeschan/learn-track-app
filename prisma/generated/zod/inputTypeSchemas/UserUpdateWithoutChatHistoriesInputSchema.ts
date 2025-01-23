import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { SummaryUpdateManyWithoutUserNestedInputSchema } from './SummaryUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateWithoutChatHistoriesInputSchema: z.ZodType<Prisma.UserUpdateWithoutChatHistoriesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastLogin: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  summaries: z.lazy(() => SummaryUpdateManyWithoutUserNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.UserUpdateWithoutChatHistoriesInput>;

export default UserUpdateWithoutChatHistoriesInputSchema;
