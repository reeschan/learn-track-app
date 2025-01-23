import type { Prisma } from '../..';

import { z } from 'zod';
import { CategoryUpdateWithoutSummaryCategoriesInputSchema } from './CategoryUpdateWithoutSummaryCategoriesInputSchema';
import { CategoryUncheckedUpdateWithoutSummaryCategoriesInputSchema } from './CategoryUncheckedUpdateWithoutSummaryCategoriesInputSchema';
import { CategoryCreateWithoutSummaryCategoriesInputSchema } from './CategoryCreateWithoutSummaryCategoriesInputSchema';
import { CategoryUncheckedCreateWithoutSummaryCategoriesInputSchema } from './CategoryUncheckedCreateWithoutSummaryCategoriesInputSchema';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';

export const CategoryUpsertWithoutSummaryCategoriesInputSchema: z.ZodType<Prisma.CategoryUpsertWithoutSummaryCategoriesInput> = z.object({
  update: z.union([ z.lazy(() => CategoryUpdateWithoutSummaryCategoriesInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutSummaryCategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutSummaryCategoriesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutSummaryCategoriesInputSchema) ]),
  where: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryUpsertWithoutSummaryCategoriesInput>;

export default CategoryUpsertWithoutSummaryCategoriesInputSchema;
