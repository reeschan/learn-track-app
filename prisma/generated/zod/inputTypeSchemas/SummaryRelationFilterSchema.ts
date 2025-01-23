import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryWhereInputSchema } from './SummaryWhereInputSchema';

export const SummaryRelationFilterSchema: z.ZodType<Prisma.SummaryRelationFilter> = z.object({
  is: z.lazy(() => SummaryWhereInputSchema).optional(),
  isNot: z.lazy(() => SummaryWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryRelationFilter>;

export default SummaryRelationFilterSchema;
