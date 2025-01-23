import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagWhereUniqueInputSchema } from './SummaryTagWhereUniqueInputSchema';
import { SummaryTagUpdateWithoutSummaryInputSchema } from './SummaryTagUpdateWithoutSummaryInputSchema';
import { SummaryTagUncheckedUpdateWithoutSummaryInputSchema } from './SummaryTagUncheckedUpdateWithoutSummaryInputSchema';

export const SummaryTagUpdateWithWhereUniqueWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryTagUpdateWithWhereUniqueWithoutSummaryInput> = z.object({
  where: z.lazy(() => SummaryTagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SummaryTagUpdateWithoutSummaryInputSchema),z.lazy(() => SummaryTagUncheckedUpdateWithoutSummaryInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryTagUpdateWithWhereUniqueWithoutSummaryInput>;

export default SummaryTagUpdateWithWhereUniqueWithoutSummaryInputSchema;
