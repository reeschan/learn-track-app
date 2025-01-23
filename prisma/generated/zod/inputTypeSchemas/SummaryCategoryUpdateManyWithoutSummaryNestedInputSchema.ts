import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryCreateWithoutSummaryInputSchema } from './SummaryCategoryCreateWithoutSummaryInputSchema';
import { SummaryCategoryUncheckedCreateWithoutSummaryInputSchema } from './SummaryCategoryUncheckedCreateWithoutSummaryInputSchema';
import { SummaryCategoryCreateOrConnectWithoutSummaryInputSchema } from './SummaryCategoryCreateOrConnectWithoutSummaryInputSchema';
import { SummaryCategoryUpsertWithWhereUniqueWithoutSummaryInputSchema } from './SummaryCategoryUpsertWithWhereUniqueWithoutSummaryInputSchema';
import { SummaryCategoryCreateManySummaryInputEnvelopeSchema } from './SummaryCategoryCreateManySummaryInputEnvelopeSchema';
import { SummaryCategoryWhereUniqueInputSchema } from './SummaryCategoryWhereUniqueInputSchema';
import { SummaryCategoryUpdateWithWhereUniqueWithoutSummaryInputSchema } from './SummaryCategoryUpdateWithWhereUniqueWithoutSummaryInputSchema';
import { SummaryCategoryUpdateManyWithWhereWithoutSummaryInputSchema } from './SummaryCategoryUpdateManyWithWhereWithoutSummaryInputSchema';
import { SummaryCategoryScalarWhereInputSchema } from './SummaryCategoryScalarWhereInputSchema';

export const SummaryCategoryUpdateManyWithoutSummaryNestedInputSchema: z.ZodType<Prisma.SummaryCategoryUpdateManyWithoutSummaryNestedInput> = z.object({
  create: z.union([ z.lazy(() => SummaryCategoryCreateWithoutSummaryInputSchema),z.lazy(() => SummaryCategoryCreateWithoutSummaryInputSchema).array(),z.lazy(() => SummaryCategoryUncheckedCreateWithoutSummaryInputSchema),z.lazy(() => SummaryCategoryUncheckedCreateWithoutSummaryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SummaryCategoryCreateOrConnectWithoutSummaryInputSchema),z.lazy(() => SummaryCategoryCreateOrConnectWithoutSummaryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SummaryCategoryUpsertWithWhereUniqueWithoutSummaryInputSchema),z.lazy(() => SummaryCategoryUpsertWithWhereUniqueWithoutSummaryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SummaryCategoryCreateManySummaryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SummaryCategoryWhereUniqueInputSchema),z.lazy(() => SummaryCategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SummaryCategoryWhereUniqueInputSchema),z.lazy(() => SummaryCategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SummaryCategoryWhereUniqueInputSchema),z.lazy(() => SummaryCategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SummaryCategoryWhereUniqueInputSchema),z.lazy(() => SummaryCategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SummaryCategoryUpdateWithWhereUniqueWithoutSummaryInputSchema),z.lazy(() => SummaryCategoryUpdateWithWhereUniqueWithoutSummaryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SummaryCategoryUpdateManyWithWhereWithoutSummaryInputSchema),z.lazy(() => SummaryCategoryUpdateManyWithWhereWithoutSummaryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SummaryCategoryScalarWhereInputSchema),z.lazy(() => SummaryCategoryScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryUpdateManyWithoutSummaryNestedInput>;

export default SummaryCategoryUpdateManyWithoutSummaryNestedInputSchema;
