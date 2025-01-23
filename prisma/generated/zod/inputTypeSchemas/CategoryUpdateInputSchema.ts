import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SummaryCategoryUpdateManyWithoutCategoryNestedInputSchema } from './SummaryCategoryUpdateManyWithoutCategoryNestedInputSchema';

export const CategoryUpdateInputSchema: z.ZodType<Prisma.CategoryUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  summaryCategories: z.lazy(() => SummaryCategoryUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryUpdateInput>;

export default CategoryUpdateInputSchema;
