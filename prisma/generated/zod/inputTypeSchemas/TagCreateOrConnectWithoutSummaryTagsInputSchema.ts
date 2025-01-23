import type { Prisma } from '../..';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutSummaryTagsInputSchema } from './TagCreateWithoutSummaryTagsInputSchema';
import { TagUncheckedCreateWithoutSummaryTagsInputSchema } from './TagUncheckedCreateWithoutSummaryTagsInputSchema';

export const TagCreateOrConnectWithoutSummaryTagsInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutSummaryTagsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutSummaryTagsInputSchema),z.lazy(() => TagUncheckedCreateWithoutSummaryTagsInputSchema) ]),
}).strict() as z.ZodType<Prisma.TagCreateOrConnectWithoutSummaryTagsInput>;

export default TagCreateOrConnectWithoutSummaryTagsInputSchema;
