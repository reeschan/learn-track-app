import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCreateNestedOneWithoutCategoriesInputSchema } from './SummaryCreateNestedOneWithoutCategoriesInputSchema';
import { CategoryCreateNestedOneWithoutSummaryCategoriesInputSchema } from './CategoryCreateNestedOneWithoutSummaryCategoriesInputSchema';

export const SummaryCategoryCreateInputSchema: z.ZodType<Prisma.SummaryCategoryCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  summary: z.lazy(() => SummaryCreateNestedOneWithoutCategoriesInputSchema),
  category: z.lazy(() => CategoryCreateNestedOneWithoutSummaryCategoriesInputSchema)
}).strict() as z.ZodType<Prisma.SummaryCategoryCreateInput>;

export default SummaryCategoryCreateInputSchema;
