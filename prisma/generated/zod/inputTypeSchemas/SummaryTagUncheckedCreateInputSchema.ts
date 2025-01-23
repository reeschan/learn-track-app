import type { Prisma } from '../..';

import { z } from 'zod';

export const SummaryTagUncheckedCreateInputSchema: z.ZodType<Prisma.SummaryTagUncheckedCreateInput> = z.object({
  summaryId: z.string(),
  tagId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.SummaryTagUncheckedCreateInput>;

export default SummaryTagUncheckedCreateInputSchema;
