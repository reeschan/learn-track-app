import { z } from 'zod';
import type { Prisma } from '../..';
import { CategoryIncludeSchema } from '../inputTypeSchemas/CategoryIncludeSchema'
import { CategoryUpdateInputSchema } from '../inputTypeSchemas/CategoryUpdateInputSchema'
import { CategoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/CategoryUncheckedUpdateInputSchema'
import { CategoryWhereUniqueInputSchema } from '../inputTypeSchemas/CategoryWhereUniqueInputSchema'
import { SummaryCategoryFindManyArgsSchema } from "../outputTypeSchemas/SummaryCategoryFindManyArgsSchema"
import { CategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/CategoryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CategorySelectSchema: z.ZodType<Prisma.CategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  summaryCategories: z.union([z.boolean(),z.lazy(() => SummaryCategoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CategoryUpdateArgsSchema: z.ZodType<Prisma.CategoryUpdateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
  where: CategoryWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.CategoryUpdateArgs>;

export default CategoryUpdateArgsSchema;
