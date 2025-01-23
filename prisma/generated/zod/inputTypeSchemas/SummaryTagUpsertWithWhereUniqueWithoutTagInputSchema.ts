import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagWhereUniqueInputSchema } from './SummaryTagWhereUniqueInputSchema';
import { SummaryTagUpdateWithoutTagInputSchema } from './SummaryTagUpdateWithoutTagInputSchema';
import { SummaryTagUncheckedUpdateWithoutTagInputSchema } from './SummaryTagUncheckedUpdateWithoutTagInputSchema';
import { SummaryTagCreateWithoutTagInputSchema } from './SummaryTagCreateWithoutTagInputSchema';
import { SummaryTagUncheckedCreateWithoutTagInputSchema } from './SummaryTagUncheckedCreateWithoutTagInputSchema';

export const SummaryTagUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.SummaryTagUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => SummaryTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SummaryTagUpdateWithoutTagInputSchema),z.lazy(() => SummaryTagUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => SummaryTagCreateWithoutTagInputSchema),z.lazy(() => SummaryTagUncheckedCreateWithoutTagInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryTagUpsertWithWhereUniqueWithoutTagInput>;

export default SummaryTagUpsertWithWhereUniqueWithoutTagInputSchema;
