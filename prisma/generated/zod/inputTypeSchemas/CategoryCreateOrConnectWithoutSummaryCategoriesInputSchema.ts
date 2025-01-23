import type { Prisma } from '../..';

import { z } from 'zod';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryCreateWithoutSummaryCategoriesInputSchema } from './CategoryCreateWithoutSummaryCategoriesInputSchema';
import { CategoryUncheckedCreateWithoutSummaryCategoriesInputSchema } from './CategoryUncheckedCreateWithoutSummaryCategoriesInputSchema';

export const CategoryCreateOrConnectWithoutSummaryCategoriesInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutSummaryCategoriesInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutSummaryCategoriesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutSummaryCategoriesInputSchema) ]),
}).strict() as z.ZodType<Prisma.CategoryCreateOrConnectWithoutSummaryCategoriesInput>;

export default CategoryCreateOrConnectWithoutSummaryCategoriesInputSchema;
