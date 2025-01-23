import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SummaryTagUncheckedUpdateManyWithoutSummaryNestedInputSchema } from './SummaryTagUncheckedUpdateManyWithoutSummaryNestedInputSchema';
import { SummaryCategoryUncheckedUpdateManyWithoutSummaryNestedInputSchema } from './SummaryCategoryUncheckedUpdateManyWithoutSummaryNestedInputSchema';

export const SummaryUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SummaryUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  summary: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => SummaryTagUncheckedUpdateManyWithoutSummaryNestedInputSchema).optional(),
  categories: z.lazy(() => SummaryCategoryUncheckedUpdateManyWithoutSummaryNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryUncheckedUpdateWithoutUserInput>;

export default SummaryUncheckedUpdateWithoutUserInputSchema;
