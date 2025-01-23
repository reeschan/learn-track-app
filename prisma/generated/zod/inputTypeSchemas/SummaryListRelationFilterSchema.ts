import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryWhereInputSchema } from './SummaryWhereInputSchema';

export const SummaryListRelationFilterSchema: z.ZodType<Prisma.SummaryListRelationFilter> = z.object({
  every: z.lazy(() => SummaryWhereInputSchema).optional(),
  some: z.lazy(() => SummaryWhereInputSchema).optional(),
  none: z.lazy(() => SummaryWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryListRelationFilter>;

export default SummaryListRelationFilterSchema;
