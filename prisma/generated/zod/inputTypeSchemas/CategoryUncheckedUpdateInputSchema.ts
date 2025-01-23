import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SummaryCategoryUncheckedUpdateManyWithoutCategoryNestedInputSchema } from './SummaryCategoryUncheckedUpdateManyWithoutCategoryNestedInputSchema';

export const CategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  summaryCategories: z.lazy(() => SummaryCategoryUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryUncheckedUpdateInput>;

export default CategoryUncheckedUpdateInputSchema;
