import type { Prisma } from '../..';

import { z } from 'zod';

export const SummaryCategoryUncheckedCreateWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryCategoryUncheckedCreateWithoutSummaryInput> = z.object({
  categoryId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryUncheckedCreateWithoutSummaryInput>;

export default SummaryCategoryUncheckedCreateWithoutSummaryInputSchema;
