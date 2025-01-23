import { z } from 'zod';
import type { Prisma } from '../..';
import { CategoryIncludeSchema } from '../inputTypeSchemas/CategoryIncludeSchema'
import { CategoryCreateInputSchema } from '../inputTypeSchemas/CategoryCreateInputSchema'
import { CategoryUncheckedCreateInputSchema } from '../inputTypeSchemas/CategoryUncheckedCreateInputSchema'
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

export const CategoryCreateArgsSchema: z.ZodType<Prisma.CategoryCreateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.CategoryCreateArgs>;

export default CategoryCreateArgsSchema;
