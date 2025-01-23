import { z } from 'zod';
import type { Prisma } from '../..';

export const CategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.CategoryCountOutputTypeSelect> = z.object({
  summaryCategories: z.boolean().optional(),
}).strict();

export default CategoryCountOutputTypeSelectSchema;
