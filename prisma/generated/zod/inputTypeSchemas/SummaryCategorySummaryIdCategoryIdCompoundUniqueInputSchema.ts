import type { Prisma } from '../..';

import { z } from 'zod';

export const SummaryCategorySummaryIdCategoryIdCompoundUniqueInputSchema: z.ZodType<Prisma.SummaryCategorySummaryIdCategoryIdCompoundUniqueInput> = z.object({
  summaryId: z.string(),
  categoryId: z.string()
}).strict() as z.ZodType<Prisma.SummaryCategorySummaryIdCategoryIdCompoundUniqueInput>;

export default SummaryCategorySummaryIdCategoryIdCompoundUniqueInputSchema;
