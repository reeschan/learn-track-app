import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const SummaryTagUncheckedUpdateManyWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryTagUncheckedUpdateManyWithoutSummaryInput> = z.object({
  tagId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryTagUncheckedUpdateManyWithoutSummaryInput>;

export default SummaryTagUncheckedUpdateManyWithoutSummaryInputSchema;
