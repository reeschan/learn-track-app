import type { Prisma } from '../..';

import { z } from 'zod';

export const SummaryTagCreateManyInputSchema: z.ZodType<Prisma.SummaryTagCreateManyInput> = z.object({
  summaryId: z.string(),
  tagId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.SummaryTagCreateManyInput>;

export default SummaryTagCreateManyInputSchema;
