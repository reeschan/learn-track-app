import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryWhereUniqueInputSchema } from './SummaryCategoryWhereUniqueInputSchema';
import { SummaryCategoryUpdateWithoutSummaryInputSchema } from './SummaryCategoryUpdateWithoutSummaryInputSchema';
import { SummaryCategoryUncheckedUpdateWithoutSummaryInputSchema } from './SummaryCategoryUncheckedUpdateWithoutSummaryInputSchema';

export const SummaryCategoryUpdateWithWhereUniqueWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryCategoryUpdateWithWhereUniqueWithoutSummaryInput> = z.object({
  where: z.lazy(() => SummaryCategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SummaryCategoryUpdateWithoutSummaryInputSchema),z.lazy(() => SummaryCategoryUncheckedUpdateWithoutSummaryInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryCategoryUpdateWithWhereUniqueWithoutSummaryInput>;

export default SummaryCategoryUpdateWithWhereUniqueWithoutSummaryInputSchema;
