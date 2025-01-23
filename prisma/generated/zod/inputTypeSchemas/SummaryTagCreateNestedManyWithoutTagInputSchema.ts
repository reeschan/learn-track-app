import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagCreateWithoutTagInputSchema } from './SummaryTagCreateWithoutTagInputSchema';
import { SummaryTagUncheckedCreateWithoutTagInputSchema } from './SummaryTagUncheckedCreateWithoutTagInputSchema';
import { SummaryTagCreateOrConnectWithoutTagInputSchema } from './SummaryTagCreateOrConnectWithoutTagInputSchema';
import { SummaryTagCreateManyTagInputEnvelopeSchema } from './SummaryTagCreateManyTagInputEnvelopeSchema';
import { SummaryTagWhereUniqueInputSchema } from './SummaryTagWhereUniqueInputSchema';

export const SummaryTagCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.SummaryTagCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => SummaryTagCreateWithoutTagInputSchema),z.lazy(() => SummaryTagCreateWithoutTagInputSchema).array(),z.lazy(() => SummaryTagUncheckedCreateWithoutTagInputSchema),z.lazy(() => SummaryTagUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SummaryTagCreateOrConnectWithoutTagInputSchema),z.lazy(() => SummaryTagCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SummaryTagCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SummaryTagWhereUniqueInputSchema),z.lazy(() => SummaryTagWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryTagCreateNestedManyWithoutTagInput>;

export default SummaryTagCreateNestedManyWithoutTagInputSchema;
