import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagCreateWithoutSummaryInputSchema } from './SummaryTagCreateWithoutSummaryInputSchema';
import { SummaryTagUncheckedCreateWithoutSummaryInputSchema } from './SummaryTagUncheckedCreateWithoutSummaryInputSchema';
import { SummaryTagCreateOrConnectWithoutSummaryInputSchema } from './SummaryTagCreateOrConnectWithoutSummaryInputSchema';
import { SummaryTagCreateManySummaryInputEnvelopeSchema } from './SummaryTagCreateManySummaryInputEnvelopeSchema';
import { SummaryTagWhereUniqueInputSchema } from './SummaryTagWhereUniqueInputSchema';

export const SummaryTagCreateNestedManyWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryTagCreateNestedManyWithoutSummaryInput> = z.object({
  create: z.union([ z.lazy(() => SummaryTagCreateWithoutSummaryInputSchema),z.lazy(() => SummaryTagCreateWithoutSummaryInputSchema).array(),z.lazy(() => SummaryTagUncheckedCreateWithoutSummaryInputSchema),z.lazy(() => SummaryTagUncheckedCreateWithoutSummaryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SummaryTagCreateOrConnectWithoutSummaryInputSchema),z.lazy(() => SummaryTagCreateOrConnectWithoutSummaryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SummaryTagCreateManySummaryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SummaryTagWhereUniqueInputSchema),z.lazy(() => SummaryTagWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryTagCreateNestedManyWithoutSummaryInput>;

export default SummaryTagCreateNestedManyWithoutSummaryInputSchema;
