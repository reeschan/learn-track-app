import { z } from 'zod';
import type { Prisma } from '../..';
import { CategorySelectSchema } from '../inputTypeSchemas/CategorySelectSchema';
import { CategoryIncludeSchema } from '../inputTypeSchemas/CategoryIncludeSchema';

export const CategoryArgsSchema: z.ZodType<Prisma.CategoryDefaultArgs> = z.object({
  select: z.lazy(() => CategorySelectSchema).optional(),
  include: z.lazy(() => CategoryIncludeSchema).optional(),
}).strict();

export default CategoryArgsSchema;
