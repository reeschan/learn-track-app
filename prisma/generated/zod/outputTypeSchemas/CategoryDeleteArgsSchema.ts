import { z } from 'zod';
import type { Prisma } from '../..';
import { CategoryIncludeSchema } from '../inputTypeSchemas/CategoryIncludeSchema'
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

export const CategoryDeleteArgsSchema: z.ZodType<Prisma.CategoryDeleteArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.CategoryDeleteArgs>;

export default CategoryDeleteArgsSchema;
