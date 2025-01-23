import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagWhereUniqueInputSchema } from './SummaryTagWhereUniqueInputSchema';
import { SummaryTagCreateWithoutTagInputSchema } from './SummaryTagCreateWithoutTagInputSchema';
import { SummaryTagUncheckedCreateWithoutTagInputSchema } from './SummaryTagUncheckedCreateWithoutTagInputSchema';

export const SummaryTagCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.SummaryTagCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => SummaryTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SummaryTagCreateWithoutTagInputSchema),z.lazy(() => SummaryTagUncheckedCreateWithoutTagInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryTagCreateOrConnectWithoutTagInput>;

export default SummaryTagCreateOrConnectWithoutTagInputSchema;
