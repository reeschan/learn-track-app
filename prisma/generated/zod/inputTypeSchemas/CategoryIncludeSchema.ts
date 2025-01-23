import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryCategoryFindManyArgsSchema } from "../outputTypeSchemas/SummaryCategoryFindManyArgsSchema"
import { CategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/CategoryCountOutputTypeArgsSchema"

export const CategoryIncludeSchema: z.ZodType<Prisma.CategoryInclude> = z.object({
  summaryCategories: z.union([z.boolean(),z.lazy(() => SummaryCategoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default CategoryIncludeSchema;
