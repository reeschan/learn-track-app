import type { Prisma } from '../..';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { CategoryUpdateOneRequiredWithoutSummaryCategoriesNestedInputSchema } from './CategoryUpdateOneRequiredWithoutSummaryCategoriesNestedInputSchema';

export const SummaryCategoryUpdateWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryCategoryUpdateWithoutSummaryInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutSummaryCategoriesNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryUpdateWithoutSummaryInput>;

export default SummaryCategoryUpdateWithoutSummaryInputSchema;
