import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryWhereUniqueInputSchema } from './SummaryCategoryWhereUniqueInputSchema';
import { SummaryCategoryUpdateWithoutSummaryInputSchema } from './SummaryCategoryUpdateWithoutSummaryInputSchema';
import { SummaryCategoryUncheckedUpdateWithoutSummaryInputSchema } from './SummaryCategoryUncheckedUpdateWithoutSummaryInputSchema';
import { SummaryCategoryCreateWithoutSummaryInputSchema } from './SummaryCategoryCreateWithoutSummaryInputSchema';
import { SummaryCategoryUncheckedCreateWithoutSummaryInputSchema } from './SummaryCategoryUncheckedCreateWithoutSummaryInputSchema';

export const SummaryCategoryUpsertWithWhereUniqueWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryCategoryUpsertWithWhereUniqueWithoutSummaryInput> = z.object({
  where: z.lazy(() => SummaryCategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SummaryCategoryUpdateWithoutSummaryInputSchema),z.lazy(() => SummaryCategoryUncheckedUpdateWithoutSummaryInputSchema) ]),
  create: z.union([ z.lazy(() => SummaryCategoryCreateWithoutSummaryInputSchema),z.lazy(() => SummaryCategoryUncheckedCreateWithoutSummaryInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryCategoryUpsertWithWhereUniqueWithoutSummaryInput>;

export default SummaryCategoryUpsertWithWhereUniqueWithoutSummaryInputSchema;
