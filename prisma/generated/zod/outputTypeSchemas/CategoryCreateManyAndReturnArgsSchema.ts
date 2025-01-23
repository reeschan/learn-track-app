import { z } from 'zod';
import type { Prisma } from '../..';
import { CategoryCreateManyInputSchema } from '../inputTypeSchemas/CategoryCreateManyInputSchema'

export const CategoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CategoryCreateManyAndReturnArgs> = z.object({
  data: z.union([ CategoryCreateManyInputSchema,CategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.CategoryCreateManyAndReturnArgs>;

export default CategoryCreateManyAndReturnArgsSchema;
