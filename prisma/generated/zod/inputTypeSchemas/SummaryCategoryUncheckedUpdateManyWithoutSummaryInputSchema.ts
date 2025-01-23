import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const SummaryCategoryUncheckedUpdateManyWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryCategoryUncheckedUpdateManyWithoutSummaryInput> = z.object({
  categoryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryUncheckedUpdateManyWithoutSummaryInput>;

export default SummaryCategoryUncheckedUpdateManyWithoutSummaryInputSchema;
