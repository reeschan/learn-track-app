import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagUncheckedCreateNestedManyWithoutSummaryInputSchema } from './SummaryTagUncheckedCreateNestedManyWithoutSummaryInputSchema';

export const SummaryUncheckedCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.SummaryUncheckedCreateWithoutCategoriesInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  title: z.string(),
  content: z.string(),
  summary: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tags: z.lazy(() => SummaryTagUncheckedCreateNestedManyWithoutSummaryInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryUncheckedCreateWithoutCategoriesInput>;

export default SummaryUncheckedCreateWithoutCategoriesInputSchema;
