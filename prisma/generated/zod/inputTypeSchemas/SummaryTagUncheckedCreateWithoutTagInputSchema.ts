import type { Prisma } from '../..';

import { z } from 'zod';

export const SummaryTagUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.SummaryTagUncheckedCreateWithoutTagInput> = z.object({
  summaryId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.SummaryTagUncheckedCreateWithoutTagInput>;

export default SummaryTagUncheckedCreateWithoutTagInputSchema;
