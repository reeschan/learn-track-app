import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryWhereUniqueInputSchema } from './SummaryCategoryWhereUniqueInputSchema';
import { SummaryCategoryCreateWithoutSummaryInputSchema } from './SummaryCategoryCreateWithoutSummaryInputSchema';
import { SummaryCategoryUncheckedCreateWithoutSummaryInputSchema } from './SummaryCategoryUncheckedCreateWithoutSummaryInputSchema';

export const SummaryCategoryCreateOrConnectWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryCategoryCreateOrConnectWithoutSummaryInput> = z.object({
  where: z.lazy(() => SummaryCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SummaryCategoryCreateWithoutSummaryInputSchema),z.lazy(() => SummaryCategoryUncheckedCreateWithoutSummaryInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryCategoryCreateOrConnectWithoutSummaryInput>;

export default SummaryCategoryCreateOrConnectWithoutSummaryInputSchema;
