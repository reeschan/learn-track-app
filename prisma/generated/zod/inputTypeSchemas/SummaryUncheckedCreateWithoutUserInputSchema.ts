import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagUncheckedCreateNestedManyWithoutSummaryInputSchema } from './SummaryTagUncheckedCreateNestedManyWithoutSummaryInputSchema';
import { SummaryCategoryUncheckedCreateNestedManyWithoutSummaryInputSchema } from './SummaryCategoryUncheckedCreateNestedManyWithoutSummaryInputSchema';

export const SummaryUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SummaryUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  summary: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tags: z.lazy(() => SummaryTagUncheckedCreateNestedManyWithoutSummaryInputSchema).optional(),
  categories: z.lazy(() => SummaryCategoryUncheckedCreateNestedManyWithoutSummaryInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryUncheckedCreateWithoutUserInput>;

export default SummaryUncheckedCreateWithoutUserInputSchema;
