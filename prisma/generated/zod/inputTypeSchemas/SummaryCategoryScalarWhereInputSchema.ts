import type { Prisma } from '../..';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const SummaryCategoryScalarWhereInputSchema: z.ZodType<Prisma.SummaryCategoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SummaryCategoryScalarWhereInputSchema),z.lazy(() => SummaryCategoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SummaryCategoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SummaryCategoryScalarWhereInputSchema),z.lazy(() => SummaryCategoryScalarWhereInputSchema).array() ]).optional(),
  summaryId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryScalarWhereInput>;

export default SummaryCategoryScalarWhereInputSchema;
