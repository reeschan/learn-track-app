import type { Prisma } from '../..';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SummaryUpdateOneRequiredWithoutCategoriesNestedInputSchema } from './SummaryUpdateOneRequiredWithoutCategoriesNestedInputSchema';

export const SummaryCategoryUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.SummaryCategoryUpdateWithoutCategoryInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  summary: z.lazy(() => SummaryUpdateOneRequiredWithoutCategoriesNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryUpdateWithoutCategoryInput>;

export default SummaryCategoryUpdateWithoutCategoryInputSchema;
