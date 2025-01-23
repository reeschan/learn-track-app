import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryWhereInputSchema } from './SummaryCategoryWhereInputSchema';

export const SummaryCategoryListRelationFilterSchema: z.ZodType<Prisma.SummaryCategoryListRelationFilter> = z.object({
  every: z.lazy(() => SummaryCategoryWhereInputSchema).optional(),
  some: z.lazy(() => SummaryCategoryWhereInputSchema).optional(),
  none: z.lazy(() => SummaryCategoryWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryListRelationFilter>;

export default SummaryCategoryListRelationFilterSchema;
