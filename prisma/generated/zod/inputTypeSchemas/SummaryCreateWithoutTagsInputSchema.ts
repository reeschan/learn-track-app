import type { Prisma } from '../..';

import { z } from 'zod';
import { UserCreateNestedOneWithoutSummariesInputSchema } from './UserCreateNestedOneWithoutSummariesInputSchema';
import { SummaryCategoryCreateNestedManyWithoutSummaryInputSchema } from './SummaryCategoryCreateNestedManyWithoutSummaryInputSchema';

export const SummaryCreateWithoutTagsInputSchema: z.ZodType<Prisma.SummaryCreateWithoutTagsInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  summary: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSummariesInputSchema),
  categories: z.lazy(() => SummaryCategoryCreateNestedManyWithoutSummaryInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryCreateWithoutTagsInput>;

export default SummaryCreateWithoutTagsInputSchema;
