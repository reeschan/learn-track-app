import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const SummaryCategoryUncheckedUpdateManyWithoutCategoryInputSchema: z.ZodType<Prisma.SummaryCategoryUncheckedUpdateManyWithoutCategoryInput> = z.object({
  summaryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryUncheckedUpdateManyWithoutCategoryInput>;

export default SummaryCategoryUncheckedUpdateManyWithoutCategoryInputSchema;
