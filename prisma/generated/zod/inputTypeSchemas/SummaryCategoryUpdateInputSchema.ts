import type { Prisma } from '../..';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SummaryUpdateOneRequiredWithoutCategoriesNestedInputSchema } from './SummaryUpdateOneRequiredWithoutCategoriesNestedInputSchema';
import { CategoryUpdateOneRequiredWithoutSummaryCategoriesNestedInputSchema } from './CategoryUpdateOneRequiredWithoutSummaryCategoriesNestedInputSchema';

export const SummaryCategoryUpdateInputSchema: z.ZodType<Prisma.SummaryCategoryUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  summary: z.lazy(() => SummaryUpdateOneRequiredWithoutCategoriesNestedInputSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutSummaryCategoriesNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryUpdateInput>;

export default SummaryCategoryUpdateInputSchema;
