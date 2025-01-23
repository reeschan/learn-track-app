import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const SummaryTagUncheckedUpdateWithoutTagInputSchema: z.ZodType<Prisma.SummaryTagUncheckedUpdateWithoutTagInput> = z.object({
  summaryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryTagUncheckedUpdateWithoutTagInput>;

export default SummaryTagUncheckedUpdateWithoutTagInputSchema;
