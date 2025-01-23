import type { Prisma } from '../..';

import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagRelationFilterSchema: z.ZodType<Prisma.TagRelationFilter> = z.object({
  is: z.lazy(() => TagWhereInputSchema).optional(),
  isNot: z.lazy(() => TagWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.TagRelationFilter>;

export default TagRelationFilterSchema;
