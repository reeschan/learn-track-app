import type { Prisma } from '../..';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { SummaryRelationFilterSchema } from './SummaryRelationFilterSchema';
import { SummaryWhereInputSchema } from './SummaryWhereInputSchema';
import { CategoryRelationFilterSchema } from './CategoryRelationFilterSchema';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';

export const SummaryCategoryWhereInputSchema: z.ZodType<Prisma.SummaryCategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SummaryCategoryWhereInputSchema),z.lazy(() => SummaryCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SummaryCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SummaryCategoryWhereInputSchema),z.lazy(() => SummaryCategoryWhereInputSchema).array() ]).optional(),
  summaryId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  summary: z.union([ z.lazy(() => SummaryRelationFilterSchema),z.lazy(() => SummaryWhereInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => CategoryRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryWhereInput>;

export default SummaryCategoryWhereInputSchema;
