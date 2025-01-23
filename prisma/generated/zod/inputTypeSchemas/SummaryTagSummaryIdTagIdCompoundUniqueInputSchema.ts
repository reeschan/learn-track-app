import type { Prisma } from '../..';

import { z } from 'zod';

export const SummaryTagSummaryIdTagIdCompoundUniqueInputSchema: z.ZodType<Prisma.SummaryTagSummaryIdTagIdCompoundUniqueInput> = z.object({
  summaryId: z.string(),
  tagId: z.string()
}).strict() as z.ZodType<Prisma.SummaryTagSummaryIdTagIdCompoundUniqueInput>;

export default SummaryTagSummaryIdTagIdCompoundUniqueInputSchema;
