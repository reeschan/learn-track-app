import type { Prisma } from '../..';

import { z } from 'zod';
import { CategoryCreateWithoutSummaryCategoriesInputSchema } from './CategoryCreateWithoutSummaryCategoriesInputSchema';
import { CategoryUncheckedCreateWithoutSummaryCategoriesInputSchema } from './CategoryUncheckedCreateWithoutSummaryCategoriesInputSchema';
import { CategoryCreateOrConnectWithoutSummaryCategoriesInputSchema } from './CategoryCreateOrConnectWithoutSummaryCategoriesInputSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';

export const CategoryCreateNestedOneWithoutSummaryCategoriesInputSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutSummaryCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutSummaryCategoriesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutSummaryCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutSummaryCategoriesInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.CategoryCreateNestedOneWithoutSummaryCategoriesInput>;

export default CategoryCreateNestedOneWithoutSummaryCategoriesInputSchema;
