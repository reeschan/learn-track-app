import type { Prisma } from '../..';

import { z } from 'zod';
import { TagCreateWithoutSummaryTagsInputSchema } from './TagCreateWithoutSummaryTagsInputSchema';
import { TagUncheckedCreateWithoutSummaryTagsInputSchema } from './TagUncheckedCreateWithoutSummaryTagsInputSchema';
import { TagCreateOrConnectWithoutSummaryTagsInputSchema } from './TagCreateOrConnectWithoutSummaryTagsInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedOneWithoutSummaryTagsInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutSummaryTagsInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutSummaryTagsInputSchema),z.lazy(() => TagUncheckedCreateWithoutSummaryTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutSummaryTagsInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.TagCreateNestedOneWithoutSummaryTagsInput>;

export default TagCreateNestedOneWithoutSummaryTagsInputSchema;
