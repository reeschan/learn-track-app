import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagCreateNestedManyWithoutTagInputSchema } from './SummaryTagCreateNestedManyWithoutTagInputSchema';

export const TagCreateInputSchema: z.ZodType<Prisma.TagCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  summaryTags: z.lazy(() => SummaryTagCreateNestedManyWithoutTagInputSchema).optional()
}).strict() as z.ZodType<Prisma.TagCreateInput>;

export default TagCreateInputSchema;
