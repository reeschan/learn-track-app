import type { Prisma } from '../..';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const SummaryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SummaryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SummaryScalarWhereWithAggregatesInputSchema),z.lazy(() => SummaryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SummaryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SummaryScalarWhereWithAggregatesInputSchema),z.lazy(() => SummaryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  summary: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryScalarWhereWithAggregatesInput>;

export default SummaryScalarWhereWithAggregatesInputSchema;
