import type { Prisma } from '../..';

import { z } from 'zod';

export const SummaryTagCreateManyTagInputSchema: z.ZodType<Prisma.SummaryTagCreateManyTagInput> = z.object({
  summaryId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.SummaryTagCreateManyTagInput>;

export default SummaryTagCreateManyTagInputSchema;
