import type { Prisma } from '../..';

import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { SummaryTagListRelationFilterSchema } from './SummaryTagListRelationFilterSchema';

export const TagWhereUniqueInputSchema: z.ZodType<Prisma.TagWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    name: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  summaryTags: z.lazy(() => SummaryTagListRelationFilterSchema).optional()
}).strict()) as z.ZodType<Prisma.TagWhereUniqueInput>;

export default TagWhereUniqueInputSchema;
