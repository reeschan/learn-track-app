import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCreateNestedOneWithoutCategoriesInputSchema } from './SummaryCreateNestedOneWithoutCategoriesInputSchema';

export const SummaryCategoryCreateWithoutCategoryInputSchema: z.ZodType<Prisma.SummaryCategoryCreateWithoutCategoryInput> = z.object({
  createdAt: z.coerce.date().optional(),
  summary: z.lazy(() => SummaryCreateNestedOneWithoutCategoriesInputSchema)
}).strict() as z.ZodType<Prisma.SummaryCategoryCreateWithoutCategoryInput>;

export default SummaryCategoryCreateWithoutCategoryInputSchema;
