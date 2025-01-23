import type { Prisma } from '../..';

import { z } from 'zod';

export const TagUncheckedCreateWithoutSummaryTagsInputSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutSummaryTagsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.TagUncheckedCreateWithoutSummaryTagsInput>;

export default TagUncheckedCreateWithoutSummaryTagsInputSchema;
