import type { Prisma } from '../..';

import { z } from 'zod';

export const SummaryCategoryCreateManyInputSchema: z.ZodType<Prisma.SummaryCategoryCreateManyInput> = z.object({
  summaryId: z.string(),
  categoryId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryCreateManyInput>;

export default SummaryCategoryCreateManyInputSchema;
