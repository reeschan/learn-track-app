import type { Prisma } from '../..';

import { z } from 'zod';

export const SummaryTagCreateManySummaryInputSchema: z.ZodType<Prisma.SummaryTagCreateManySummaryInput> = z.object({
  tagId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.SummaryTagCreateManySummaryInput>;

export default SummaryTagCreateManySummaryInputSchema;
