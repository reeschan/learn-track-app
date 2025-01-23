import type { Prisma } from '../..';

import { z } from 'zod';
import { CategoryCreateNestedOneWithoutSummaryCategoriesInputSchema } from './CategoryCreateNestedOneWithoutSummaryCategoriesInputSchema';

export const SummaryCategoryCreateWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryCategoryCreateWithoutSummaryInput> = z.object({
  createdAt: z.coerce.date().optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutSummaryCategoriesInputSchema)
}).strict() as z.ZodType<Prisma.SummaryCategoryCreateWithoutSummaryInput>;

export default SummaryCategoryCreateWithoutSummaryInputSchema;
