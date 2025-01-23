import type { Prisma } from '../..';

import { z } from 'zod';
import { TagCreateWithoutSummaryTagsInputSchema } from './TagCreateWithoutSummaryTagsInputSchema';
import { TagUncheckedCreateWithoutSummaryTagsInputSchema } from './TagUncheckedCreateWithoutSummaryTagsInputSchema';
import { TagCreateOrConnectWithoutSummaryTagsInputSchema } from './TagCreateOrConnectWithoutSummaryTagsInputSchema';
import { TagUpsertWithoutSummaryTagsInputSchema } from './TagUpsertWithoutSummaryTagsInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateToOneWithWhereWithoutSummaryTagsInputSchema } from './TagUpdateToOneWithWhereWithoutSummaryTagsInputSchema';
import { TagUpdateWithoutSummaryTagsInputSchema } from './TagUpdateWithoutSummaryTagsInputSchema';
import { TagUncheckedUpdateWithoutSummaryTagsInputSchema } from './TagUncheckedUpdateWithoutSummaryTagsInputSchema';

export const TagUpdateOneRequiredWithoutSummaryTagsNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutSummaryTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutSummaryTagsInputSchema),z.lazy(() => TagUncheckedCreateWithoutSummaryTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutSummaryTagsInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutSummaryTagsInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateToOneWithWhereWithoutSummaryTagsInputSchema),z.lazy(() => TagUpdateWithoutSummaryTagsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutSummaryTagsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.TagUpdateOneRequiredWithoutSummaryTagsNestedInput>;

export default TagUpdateOneRequiredWithoutSummaryTagsNestedInputSchema;
