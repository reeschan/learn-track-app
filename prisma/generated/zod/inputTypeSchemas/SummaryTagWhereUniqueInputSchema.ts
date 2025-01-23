import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagSummaryIdTagIdCompoundUniqueInputSchema } from './SummaryTagSummaryIdTagIdCompoundUniqueInputSchema';
import { SummaryTagWhereInputSchema } from './SummaryTagWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { SummaryRelationFilterSchema } from './SummaryRelationFilterSchema';
import { SummaryWhereInputSchema } from './SummaryWhereInputSchema';
import { TagRelationFilterSchema } from './TagRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const SummaryTagWhereUniqueInputSchema: z.ZodType<Prisma.SummaryTagWhereUniqueInput> = z.object({
  summaryId_tagId: z.lazy(() => SummaryTagSummaryIdTagIdCompoundUniqueInputSchema)
})
.and(z.object({
  summaryId_tagId: z.lazy(() => SummaryTagSummaryIdTagIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => SummaryTagWhereInputSchema),z.lazy(() => SummaryTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SummaryTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SummaryTagWhereInputSchema),z.lazy(() => SummaryTagWhereInputSchema).array() ]).optional(),
  summaryId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  tagId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  summary: z.union([ z.lazy(() => SummaryRelationFilterSchema),z.lazy(() => SummaryWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
}).strict()) as z.ZodType<Prisma.SummaryTagWhereUniqueInput>;

export default SummaryTagWhereUniqueInputSchema;
