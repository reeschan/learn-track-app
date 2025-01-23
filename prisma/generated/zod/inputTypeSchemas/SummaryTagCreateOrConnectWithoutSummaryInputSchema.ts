import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagWhereUniqueInputSchema } from './SummaryTagWhereUniqueInputSchema';
import { SummaryTagCreateWithoutSummaryInputSchema } from './SummaryTagCreateWithoutSummaryInputSchema';
import { SummaryTagUncheckedCreateWithoutSummaryInputSchema } from './SummaryTagUncheckedCreateWithoutSummaryInputSchema';

export const SummaryTagCreateOrConnectWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryTagCreateOrConnectWithoutSummaryInput> = z.object({
  where: z.lazy(() => SummaryTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SummaryTagCreateWithoutSummaryInputSchema),z.lazy(() => SummaryTagUncheckedCreateWithoutSummaryInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryTagCreateOrConnectWithoutSummaryInput>;

export default SummaryTagCreateOrConnectWithoutSummaryInputSchema;
