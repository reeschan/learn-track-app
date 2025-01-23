import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagCreateWithoutSummaryInputSchema } from './SummaryTagCreateWithoutSummaryInputSchema';
import { SummaryTagUncheckedCreateWithoutSummaryInputSchema } from './SummaryTagUncheckedCreateWithoutSummaryInputSchema';
import { SummaryTagCreateOrConnectWithoutSummaryInputSchema } from './SummaryTagCreateOrConnectWithoutSummaryInputSchema';
import { SummaryTagUpsertWithWhereUniqueWithoutSummaryInputSchema } from './SummaryTagUpsertWithWhereUniqueWithoutSummaryInputSchema';
import { SummaryTagCreateManySummaryInputEnvelopeSchema } from './SummaryTagCreateManySummaryInputEnvelopeSchema';
import { SummaryTagWhereUniqueInputSchema } from './SummaryTagWhereUniqueInputSchema';
import { SummaryTagUpdateWithWhereUniqueWithoutSummaryInputSchema } from './SummaryTagUpdateWithWhereUniqueWithoutSummaryInputSchema';
import { SummaryTagUpdateManyWithWhereWithoutSummaryInputSchema } from './SummaryTagUpdateManyWithWhereWithoutSummaryInputSchema';
import { SummaryTagScalarWhereInputSchema } from './SummaryTagScalarWhereInputSchema';

export const SummaryTagUncheckedUpdateManyWithoutSummaryNestedInputSchema: z.ZodType<Prisma.SummaryTagUncheckedUpdateManyWithoutSummaryNestedInput> = z.object({
  create: z.union([ z.lazy(() => SummaryTagCreateWithoutSummaryInputSchema),z.lazy(() => SummaryTagCreateWithoutSummaryInputSchema).array(),z.lazy(() => SummaryTagUncheckedCreateWithoutSummaryInputSchema),z.lazy(() => SummaryTagUncheckedCreateWithoutSummaryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SummaryTagCreateOrConnectWithoutSummaryInputSchema),z.lazy(() => SummaryTagCreateOrConnectWithoutSummaryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SummaryTagUpsertWithWhereUniqueWithoutSummaryInputSchema),z.lazy(() => SummaryTagUpsertWithWhereUniqueWithoutSummaryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SummaryTagCreateManySummaryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SummaryTagWhereUniqueInputSchema),z.lazy(() => SummaryTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SummaryTagWhereUniqueInputSchema),z.lazy(() => SummaryTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SummaryTagWhereUniqueInputSchema),z.lazy(() => SummaryTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SummaryTagWhereUniqueInputSchema),z.lazy(() => SummaryTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SummaryTagUpdateWithWhereUniqueWithoutSummaryInputSchema),z.lazy(() => SummaryTagUpdateWithWhereUniqueWithoutSummaryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SummaryTagUpdateManyWithWhereWithoutSummaryInputSchema),z.lazy(() => SummaryTagUpdateManyWithWhereWithoutSummaryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SummaryTagScalarWhereInputSchema),z.lazy(() => SummaryTagScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryTagUncheckedUpdateManyWithoutSummaryNestedInput>;

export default SummaryTagUncheckedUpdateManyWithoutSummaryNestedInputSchema;
