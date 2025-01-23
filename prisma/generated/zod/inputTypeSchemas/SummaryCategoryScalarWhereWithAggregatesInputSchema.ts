import type { Prisma } from '../..';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const SummaryCategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SummaryCategoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SummaryCategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => SummaryCategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SummaryCategoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SummaryCategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => SummaryCategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  summaryId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryScalarWhereWithAggregatesInput>;

export default SummaryCategoryScalarWhereWithAggregatesInputSchema;
