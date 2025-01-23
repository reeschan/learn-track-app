import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCreateNestedOneWithoutTagsInputSchema } from './SummaryCreateNestedOneWithoutTagsInputSchema';
import { TagCreateNestedOneWithoutSummaryTagsInputSchema } from './TagCreateNestedOneWithoutSummaryTagsInputSchema';

export const SummaryTagCreateInputSchema: z.ZodType<Prisma.SummaryTagCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  summary: z.lazy(() => SummaryCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutSummaryTagsInputSchema)
}).strict() as z.ZodType<Prisma.SummaryTagCreateInput>;

export default SummaryTagCreateInputSchema;
