import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const SummaryCategoryUncheckedUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.SummaryCategoryUncheckedUpdateWithoutCategoryInput> = z.object({
  summaryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryUncheckedUpdateWithoutCategoryInput>;

export default SummaryCategoryUncheckedUpdateWithoutCategoryInputSchema;
