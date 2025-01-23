import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryCreateWithoutSummaryInputSchema } from './SummaryCategoryCreateWithoutSummaryInputSchema';
import { SummaryCategoryUncheckedCreateWithoutSummaryInputSchema } from './SummaryCategoryUncheckedCreateWithoutSummaryInputSchema';
import { SummaryCategoryCreateOrConnectWithoutSummaryInputSchema } from './SummaryCategoryCreateOrConnectWithoutSummaryInputSchema';
import { SummaryCategoryCreateManySummaryInputEnvelopeSchema } from './SummaryCategoryCreateManySummaryInputEnvelopeSchema';
import { SummaryCategoryWhereUniqueInputSchema } from './SummaryCategoryWhereUniqueInputSchema';

export const SummaryCategoryUncheckedCreateNestedManyWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryCategoryUncheckedCreateNestedManyWithoutSummaryInput> = z.object({
  create: z.union([ z.lazy(() => SummaryCategoryCreateWithoutSummaryInputSchema),z.lazy(() => SummaryCategoryCreateWithoutSummaryInputSchema).array(),z.lazy(() => SummaryCategoryUncheckedCreateWithoutSummaryInputSchema),z.lazy(() => SummaryCategoryUncheckedCreateWithoutSummaryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SummaryCategoryCreateOrConnectWithoutSummaryInputSchema),z.lazy(() => SummaryCategoryCreateOrConnectWithoutSummaryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SummaryCategoryCreateManySummaryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SummaryCategoryWhereUniqueInputSchema),z.lazy(() => SummaryCategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryUncheckedCreateNestedManyWithoutSummaryInput>;

export default SummaryCategoryUncheckedCreateNestedManyWithoutSummaryInputSchema;
