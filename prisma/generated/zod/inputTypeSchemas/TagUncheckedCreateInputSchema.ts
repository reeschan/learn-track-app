import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagUncheckedCreateNestedManyWithoutTagInputSchema } from './SummaryTagUncheckedCreateNestedManyWithoutTagInputSchema';

export const TagUncheckedCreateInputSchema: z.ZodType<Prisma.TagUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  summaryTags: z.lazy(() => SummaryTagUncheckedCreateNestedManyWithoutTagInputSchema).optional()
}).strict() as z.ZodType<Prisma.TagUncheckedCreateInput>;

export default TagUncheckedCreateInputSchema;
