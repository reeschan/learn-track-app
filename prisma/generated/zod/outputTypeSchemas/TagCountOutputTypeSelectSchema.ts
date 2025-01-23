import { z } from 'zod';
import type { Prisma } from '../..';

export const TagCountOutputTypeSelectSchema: z.ZodType<Prisma.TagCountOutputTypeSelect> = z.object({
  summaryTags: z.boolean().optional(),
}).strict();

export default TagCountOutputTypeSelectSchema;
