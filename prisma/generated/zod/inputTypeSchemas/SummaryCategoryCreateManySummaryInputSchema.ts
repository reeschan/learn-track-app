import type { Prisma } from '../..';

import { z } from 'zod';

export const SummaryCategoryCreateManySummaryInputSchema: z.ZodType<Prisma.SummaryCategoryCreateManySummaryInput> = z.object({
  categoryId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryCreateManySummaryInput>;

export default SummaryCategoryCreateManySummaryInputSchema;
