import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SummaryTagUncheckedUpdateManyWithoutSummaryNestedInputSchema } from './SummaryTagUncheckedUpdateManyWithoutSummaryNestedInputSchema';

export const SummaryUncheckedUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.SummaryUncheckedUpdateWithoutCategoriesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  summary: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => SummaryTagUncheckedUpdateManyWithoutSummaryNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryUncheckedUpdateWithoutCategoriesInput>;

export default SummaryUncheckedUpdateWithoutCategoriesInputSchema;
