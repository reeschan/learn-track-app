import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { ChatGPTHistoryUncheckedUpdateManyWithoutUserNestedInputSchema } from './ChatGPTHistoryUncheckedUpdateManyWithoutUserNestedInputSchema';

export const UserUncheckedUpdateWithoutSummariesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSummariesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastLogin: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  chatHistories: z.lazy(() => ChatGPTHistoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.UserUncheckedUpdateWithoutSummariesInput>;

export default UserUncheckedUpdateWithoutSummariesInputSchema;
