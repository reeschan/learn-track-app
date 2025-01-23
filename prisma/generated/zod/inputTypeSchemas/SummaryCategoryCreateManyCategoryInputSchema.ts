import type { Prisma } from '../..';

import { z } from 'zod';

export const SummaryCategoryCreateManyCategoryInputSchema: z.ZodType<Prisma.SummaryCategoryCreateManyCategoryInput> = z.object({
  summaryId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryCreateManyCategoryInput>;

export default SummaryCategoryCreateManyCategoryInputSchema;
