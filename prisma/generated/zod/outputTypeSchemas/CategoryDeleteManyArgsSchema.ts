import { z } from 'zod';
import type { Prisma } from '../..';
import { CategoryWhereInputSchema } from '../inputTypeSchemas/CategoryWhereInputSchema'

export const CategoryDeleteManyArgsSchema: z.ZodType<Prisma.CategoryDeleteManyArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.CategoryDeleteManyArgs>;

export default CategoryDeleteManyArgsSchema;
