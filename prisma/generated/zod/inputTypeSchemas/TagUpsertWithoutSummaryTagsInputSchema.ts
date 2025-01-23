import type { Prisma } from '../..';

import { z } from 'zod';
import { TagUpdateWithoutSummaryTagsInputSchema } from './TagUpdateWithoutSummaryTagsInputSchema';
import { TagUncheckedUpdateWithoutSummaryTagsInputSchema } from './TagUncheckedUpdateWithoutSummaryTagsInputSchema';
import { TagCreateWithoutSummaryTagsInputSchema } from './TagCreateWithoutSummaryTagsInputSchema';
import { TagUncheckedCreateWithoutSummaryTagsInputSchema } from './TagUncheckedCreateWithoutSummaryTagsInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagUpsertWithoutSummaryTagsInputSchema: z.ZodType<Prisma.TagUpsertWithoutSummaryTagsInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutSummaryTagsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutSummaryTagsInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutSummaryTagsInputSchema),z.lazy(() => TagUncheckedCreateWithoutSummaryTagsInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.TagUpsertWithoutSummaryTagsInput>;

export default TagUpsertWithoutSummaryTagsInputSchema;
