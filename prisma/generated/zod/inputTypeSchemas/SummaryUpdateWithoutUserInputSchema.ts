import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SummaryTagUpdateManyWithoutSummaryNestedInputSchema } from './SummaryTagUpdateManyWithoutSummaryNestedInputSchema';
import { SummaryCategoryUpdateManyWithoutSummaryNestedInputSchema } from './SummaryCategoryUpdateManyWithoutSummaryNestedInputSchema';

export const SummaryUpdateWithoutUserInputSchema: z.ZodType<Prisma.SummaryUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  summary: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => SummaryTagUpdateManyWithoutSummaryNestedInputSchema).optional(),
  categories: z.lazy(() => SummaryCategoryUpdateManyWithoutSummaryNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryUpdateWithoutUserInput>;

export default SummaryUpdateWithoutUserInputSchema;
