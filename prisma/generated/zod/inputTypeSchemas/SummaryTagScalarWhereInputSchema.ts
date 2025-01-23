import type { Prisma } from '../..';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const SummaryTagScalarWhereInputSchema: z.ZodType<Prisma.SummaryTagScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SummaryTagScalarWhereInputSchema),z.lazy(() => SummaryTagScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SummaryTagScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SummaryTagScalarWhereInputSchema),z.lazy(() => SummaryTagScalarWhereInputSchema).array() ]).optional(),
  summaryId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  tagId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryTagScalarWhereInput>;

export default SummaryTagScalarWhereInputSchema;
