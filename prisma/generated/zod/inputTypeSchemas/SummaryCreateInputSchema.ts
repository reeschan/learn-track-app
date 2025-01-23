import type { Prisma } from '../..';

import { z } from 'zod';
import { UserCreateNestedOneWithoutSummariesInputSchema } from './UserCreateNestedOneWithoutSummariesInputSchema';
import { SummaryTagCreateNestedManyWithoutSummaryInputSchema } from './SummaryTagCreateNestedManyWithoutSummaryInputSchema';
import { SummaryCategoryCreateNestedManyWithoutSummaryInputSchema } from './SummaryCategoryCreateNestedManyWithoutSummaryInputSchema';

export const SummaryCreateInputSchema: z.ZodType<Prisma.SummaryCreateInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  summary: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSummariesInputSchema),
  tags: z.lazy(() => SummaryTagCreateNestedManyWithoutSummaryInputSchema).optional(),
  categories: z.lazy(() => SummaryCategoryCreateNestedManyWithoutSummaryInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryCreateInput>;

export default SummaryCreateInputSchema;
