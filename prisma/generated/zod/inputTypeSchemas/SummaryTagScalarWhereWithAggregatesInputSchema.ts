import type { Prisma } from '../..';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const SummaryTagScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SummaryTagScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SummaryTagScalarWhereWithAggregatesInputSchema),z.lazy(() => SummaryTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SummaryTagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SummaryTagScalarWhereWithAggregatesInputSchema),z.lazy(() => SummaryTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  summaryId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  tagId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryTagScalarWhereWithAggregatesInput>;

export default SummaryTagScalarWhereWithAggregatesInputSchema;
