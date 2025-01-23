import type { Prisma } from '../..';

import { z } from 'zod';

export const SummaryCategoryUncheckedCreateInputSchema: z.ZodType<Prisma.SummaryCategoryUncheckedCreateInput> = z.object({
  summaryId: z.string(),
  categoryId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryUncheckedCreateInput>;

export default SummaryCategoryUncheckedCreateInputSchema;
