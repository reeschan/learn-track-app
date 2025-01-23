import type { Prisma } from '../..';

import { z } from 'zod';
import { UserCreateNestedOneWithoutSummariesInputSchema } from './UserCreateNestedOneWithoutSummariesInputSchema';
import { SummaryTagCreateNestedManyWithoutSummaryInputSchema } from './SummaryTagCreateNestedManyWithoutSummaryInputSchema';

export const SummaryCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.SummaryCreateWithoutCategoriesInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  summary: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSummariesInputSchema),
  tags: z.lazy(() => SummaryTagCreateNestedManyWithoutSummaryInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryCreateWithoutCategoriesInput>;

export default SummaryCreateWithoutCategoriesInputSchema;
