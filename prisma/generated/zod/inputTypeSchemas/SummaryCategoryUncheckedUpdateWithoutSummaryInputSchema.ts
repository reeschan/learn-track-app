import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const SummaryCategoryUncheckedUpdateWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryCategoryUncheckedUpdateWithoutSummaryInput> = z.object({
  categoryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryUncheckedUpdateWithoutSummaryInput>;

export default SummaryCategoryUncheckedUpdateWithoutSummaryInputSchema;
