import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SummaryCategoryUncheckedUpdateManyWithoutSummaryNestedInputSchema } from './SummaryCategoryUncheckedUpdateManyWithoutSummaryNestedInputSchema';

export const SummaryUncheckedUpdateWithoutTagsInputSchema: z.ZodType<Prisma.SummaryUncheckedUpdateWithoutTagsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  summary: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  categories: z.lazy(() => SummaryCategoryUncheckedUpdateManyWithoutSummaryNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryUncheckedUpdateWithoutTagsInput>;

export default SummaryUncheckedUpdateWithoutTagsInputSchema;
