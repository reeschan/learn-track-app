import type { Prisma } from '../..';

import { z } from 'zod';

export const SummaryCategoryUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.SummaryCategoryUncheckedCreateWithoutCategoryInput> = z.object({
  summaryId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryUncheckedCreateWithoutCategoryInput>;

export default SummaryCategoryUncheckedCreateWithoutCategoryInputSchema;
