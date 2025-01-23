import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryUpdateWithoutTagsInputSchema } from './SummaryUpdateWithoutTagsInputSchema';
import { SummaryUncheckedUpdateWithoutTagsInputSchema } from './SummaryUncheckedUpdateWithoutTagsInputSchema';
import { SummaryCreateWithoutTagsInputSchema } from './SummaryCreateWithoutTagsInputSchema';
import { SummaryUncheckedCreateWithoutTagsInputSchema } from './SummaryUncheckedCreateWithoutTagsInputSchema';
import { SummaryWhereInputSchema } from './SummaryWhereInputSchema';

export const SummaryUpsertWithoutTagsInputSchema: z.ZodType<Prisma.SummaryUpsertWithoutTagsInput> = z.object({
  update: z.union([ z.lazy(() => SummaryUpdateWithoutTagsInputSchema),z.lazy(() => SummaryUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => SummaryCreateWithoutTagsInputSchema),z.lazy(() => SummaryUncheckedCreateWithoutTagsInputSchema) ]),
  where: z.lazy(() => SummaryWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryUpsertWithoutTagsInput>;

export default SummaryUpsertWithoutTagsInputSchema;
