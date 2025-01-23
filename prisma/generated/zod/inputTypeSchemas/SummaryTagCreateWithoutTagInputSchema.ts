import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCreateNestedOneWithoutTagsInputSchema } from './SummaryCreateNestedOneWithoutTagsInputSchema';

export const SummaryTagCreateWithoutTagInputSchema: z.ZodType<Prisma.SummaryTagCreateWithoutTagInput> = z.object({
  createdAt: z.coerce.date().optional(),
  summary: z.lazy(() => SummaryCreateNestedOneWithoutTagsInputSchema)
}).strict() as z.ZodType<Prisma.SummaryTagCreateWithoutTagInput>;

export default SummaryTagCreateWithoutTagInputSchema;
