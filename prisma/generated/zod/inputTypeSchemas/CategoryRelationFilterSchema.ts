import type { Prisma } from '../..';

import { z } from 'zod';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';

export const CategoryRelationFilterSchema: z.ZodType<Prisma.CategoryRelationFilter> = z.object({
  is: z.lazy(() => CategoryWhereInputSchema).optional(),
  isNot: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryRelationFilter>;

export default CategoryRelationFilterSchema;
