import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagWhereUniqueInputSchema } from './SummaryTagWhereUniqueInputSchema';
import { SummaryTagUpdateWithoutSummaryInputSchema } from './SummaryTagUpdateWithoutSummaryInputSchema';
import { SummaryTagUncheckedUpdateWithoutSummaryInputSchema } from './SummaryTagUncheckedUpdateWithoutSummaryInputSchema';
import { SummaryTagCreateWithoutSummaryInputSchema } from './SummaryTagCreateWithoutSummaryInputSchema';
import { SummaryTagUncheckedCreateWithoutSummaryInputSchema } from './SummaryTagUncheckedCreateWithoutSummaryInputSchema';

export const SummaryTagUpsertWithWhereUniqueWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryTagUpsertWithWhereUniqueWithoutSummaryInput> = z.object({
  where: z.lazy(() => SummaryTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SummaryTagUpdateWithoutSummaryInputSchema),z.lazy(() => SummaryTagUncheckedUpdateWithoutSummaryInputSchema) ]),
  create: z.union([ z.lazy(() => SummaryTagCreateWithoutSummaryInputSchema),z.lazy(() => SummaryTagUncheckedCreateWithoutSummaryInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryTagUpsertWithWhereUniqueWithoutSummaryInput>;

export default SummaryTagUpsertWithWhereUniqueWithoutSummaryInputSchema;
