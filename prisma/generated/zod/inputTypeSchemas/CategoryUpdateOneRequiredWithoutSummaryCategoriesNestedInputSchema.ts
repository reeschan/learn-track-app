import type { Prisma } from '../..';

import { z } from 'zod';
import { CategoryCreateWithoutSummaryCategoriesInputSchema } from './CategoryCreateWithoutSummaryCategoriesInputSchema';
import { CategoryUncheckedCreateWithoutSummaryCategoriesInputSchema } from './CategoryUncheckedCreateWithoutSummaryCategoriesInputSchema';
import { CategoryCreateOrConnectWithoutSummaryCategoriesInputSchema } from './CategoryCreateOrConnectWithoutSummaryCategoriesInputSchema';
import { CategoryUpsertWithoutSummaryCategoriesInputSchema } from './CategoryUpsertWithoutSummaryCategoriesInputSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryUpdateToOneWithWhereWithoutSummaryCategoriesInputSchema } from './CategoryUpdateToOneWithWhereWithoutSummaryCategoriesInputSchema';
import { CategoryUpdateWithoutSummaryCategoriesInputSchema } from './CategoryUpdateWithoutSummaryCategoriesInputSchema';
import { CategoryUncheckedUpdateWithoutSummaryCategoriesInputSchema } from './CategoryUncheckedUpdateWithoutSummaryCategoriesInputSchema';

export const CategoryUpdateOneRequiredWithoutSummaryCategoriesNestedInputSchema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutSummaryCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutSummaryCategoriesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutSummaryCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutSummaryCategoriesInputSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutSummaryCategoriesInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateToOneWithWhereWithoutSummaryCategoriesInputSchema),z.lazy(() => CategoryUpdateWithoutSummaryCategoriesInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutSummaryCategoriesInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutSummaryCategoriesNestedInput>;

export default CategoryUpdateOneRequiredWithoutSummaryCategoriesNestedInputSchema;
