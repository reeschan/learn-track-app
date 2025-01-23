import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const SummaryTagUncheckedUpdateWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryTagUncheckedUpdateWithoutSummaryInput> = z.object({
  tagId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryTagUncheckedUpdateWithoutSummaryInput>;

export default SummaryTagUncheckedUpdateWithoutSummaryInputSchema;
