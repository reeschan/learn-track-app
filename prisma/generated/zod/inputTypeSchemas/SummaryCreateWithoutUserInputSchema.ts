import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagCreateNestedManyWithoutSummaryInputSchema } from './SummaryTagCreateNestedManyWithoutSummaryInputSchema';
import { SummaryCategoryCreateNestedManyWithoutSummaryInputSchema } from './SummaryCategoryCreateNestedManyWithoutSummaryInputSchema';

export const SummaryCreateWithoutUserInputSchema: z.ZodType<Prisma.SummaryCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  summary: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tags: z.lazy(() => SummaryTagCreateNestedManyWithoutSummaryInputSchema).optional(),
  categories: z.lazy(() => SummaryCategoryCreateNestedManyWithoutSummaryInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryCreateWithoutUserInput>;

export default SummaryCreateWithoutUserInputSchema;
