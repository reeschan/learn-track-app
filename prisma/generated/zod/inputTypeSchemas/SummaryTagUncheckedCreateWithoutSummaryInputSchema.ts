import type { Prisma } from '../..';

import { z } from 'zod';

export const SummaryTagUncheckedCreateWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryTagUncheckedCreateWithoutSummaryInput> = z.object({
  tagId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.SummaryTagUncheckedCreateWithoutSummaryInput>;

export default SummaryTagUncheckedCreateWithoutSummaryInputSchema;
