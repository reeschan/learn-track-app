import type { Prisma } from '../..';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const SummaryScalarWhereInputSchema: z.ZodType<Prisma.SummaryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SummaryScalarWhereInputSchema),z.lazy(() => SummaryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SummaryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SummaryScalarWhereInputSchema),z.lazy(() => SummaryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  summary: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryScalarWhereInput>;

export default SummaryScalarWhereInputSchema;
