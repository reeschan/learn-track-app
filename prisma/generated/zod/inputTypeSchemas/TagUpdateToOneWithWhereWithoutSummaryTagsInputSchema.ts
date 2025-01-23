import type { Prisma } from '../..';

import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutSummaryTagsInputSchema } from './TagUpdateWithoutSummaryTagsInputSchema';
import { TagUncheckedUpdateWithoutSummaryTagsInputSchema } from './TagUncheckedUpdateWithoutSummaryTagsInputSchema';

export const TagUpdateToOneWithWhereWithoutSummaryTagsInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutSummaryTagsInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutSummaryTagsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutSummaryTagsInputSchema) ]),
}).strict() as z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutSummaryTagsInput>;

export default TagUpdateToOneWithWhereWithoutSummaryTagsInputSchema;
