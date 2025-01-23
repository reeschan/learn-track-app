import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutSummariesNestedInputSchema } from './UserUpdateOneRequiredWithoutSummariesNestedInputSchema';
import { SummaryTagUpdateManyWithoutSummaryNestedInputSchema } from './SummaryTagUpdateManyWithoutSummaryNestedInputSchema';

export const SummaryUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.SummaryUpdateWithoutCategoriesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  summary: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSummariesNestedInputSchema).optional(),
  tags: z.lazy(() => SummaryTagUpdateManyWithoutSummaryNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryUpdateWithoutCategoriesInput>;

export default SummaryUpdateWithoutCategoriesInputSchema;
