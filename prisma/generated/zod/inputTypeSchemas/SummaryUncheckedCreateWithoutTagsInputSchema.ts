import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryUncheckedCreateNestedManyWithoutSummaryInputSchema } from './SummaryCategoryUncheckedCreateNestedManyWithoutSummaryInputSchema';

export const SummaryUncheckedCreateWithoutTagsInputSchema: z.ZodType<Prisma.SummaryUncheckedCreateWithoutTagsInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  title: z.string(),
  content: z.string(),
  summary: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  categories: z.lazy(() => SummaryCategoryUncheckedCreateNestedManyWithoutSummaryInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryUncheckedCreateWithoutTagsInput>;

export default SummaryUncheckedCreateWithoutTagsInputSchema;
