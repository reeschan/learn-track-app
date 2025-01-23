import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagWhereInputSchema } from './SummaryTagWhereInputSchema';

export const SummaryTagListRelationFilterSchema: z.ZodType<Prisma.SummaryTagListRelationFilter> = z.object({
  every: z.lazy(() => SummaryTagWhereInputSchema).optional(),
  some: z.lazy(() => SummaryTagWhereInputSchema).optional(),
  none: z.lazy(() => SummaryTagWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryTagListRelationFilter>;

export default SummaryTagListRelationFilterSchema;
