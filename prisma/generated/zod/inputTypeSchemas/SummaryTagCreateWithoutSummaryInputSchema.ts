import type { Prisma } from '../..';

import { z } from 'zod';
import { TagCreateNestedOneWithoutSummaryTagsInputSchema } from './TagCreateNestedOneWithoutSummaryTagsInputSchema';

export const SummaryTagCreateWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryTagCreateWithoutSummaryInput> = z.object({
  createdAt: z.coerce.date().optional(),
  tag: z.lazy(() => TagCreateNestedOneWithoutSummaryTagsInputSchema)
}).strict() as z.ZodType<Prisma.SummaryTagCreateWithoutSummaryInput>;

export default SummaryTagCreateWithoutSummaryInputSchema;
