import type { Prisma } from '../..';

import { z } from 'zod';

export const TagCreateWithoutSummaryTagsInputSchema: z.ZodType<Prisma.TagCreateWithoutSummaryTagsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.TagCreateWithoutSummaryTagsInput>;

export default TagCreateWithoutSummaryTagsInputSchema;
