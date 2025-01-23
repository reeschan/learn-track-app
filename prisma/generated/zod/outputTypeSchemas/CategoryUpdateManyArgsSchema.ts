import { z } from 'zod';
import type { Prisma } from '../..';
import { CategoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/CategoryUpdateManyMutationInputSchema'
import { CategoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CategoryUncheckedUpdateManyInputSchema'
import { CategoryWhereInputSchema } from '../inputTypeSchemas/CategoryWhereInputSchema'

export const CategoryUpdateManyArgsSchema: z.ZodType<Prisma.CategoryUpdateManyArgs> = z.object({
  data: z.union([ CategoryUpdateManyMutationInputSchema,CategoryUncheckedUpdateManyInputSchema ]),
  where: CategoryWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.CategoryUpdateManyArgs>;

export default CategoryUpdateManyArgsSchema;
