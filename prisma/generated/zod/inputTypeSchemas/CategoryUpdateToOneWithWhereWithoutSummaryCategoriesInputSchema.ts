import type { Prisma } from '../..';

import { z } from 'zod';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';
import { CategoryUpdateWithoutSummaryCategoriesInputSchema } from './CategoryUpdateWithoutSummaryCategoriesInputSchema';
import { CategoryUncheckedUpdateWithoutSummaryCategoriesInputSchema } from './CategoryUncheckedUpdateWithoutSummaryCategoriesInputSchema';

export const CategoryUpdateToOneWithWhereWithoutSummaryCategoriesInputSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutSummaryCategoriesInput> = z.object({
  where: z.lazy(() => CategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutSummaryCategoriesInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutSummaryCategoriesInputSchema) ]),
}).strict() as z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutSummaryCategoriesInput>;

export default CategoryUpdateToOneWithWhereWithoutSummaryCategoriesInputSchema;
