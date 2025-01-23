import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagCreateWithoutTagInputSchema } from './SummaryTagCreateWithoutTagInputSchema';
import { SummaryTagUncheckedCreateWithoutTagInputSchema } from './SummaryTagUncheckedCreateWithoutTagInputSchema';
import { SummaryTagCreateOrConnectWithoutTagInputSchema } from './SummaryTagCreateOrConnectWithoutTagInputSchema';
import { SummaryTagUpsertWithWhereUniqueWithoutTagInputSchema } from './SummaryTagUpsertWithWhereUniqueWithoutTagInputSchema';
import { SummaryTagCreateManyTagInputEnvelopeSchema } from './SummaryTagCreateManyTagInputEnvelopeSchema';
import { SummaryTagWhereUniqueInputSchema } from './SummaryTagWhereUniqueInputSchema';
import { SummaryTagUpdateWithWhereUniqueWithoutTagInputSchema } from './SummaryTagUpdateWithWhereUniqueWithoutTagInputSchema';
import { SummaryTagUpdateManyWithWhereWithoutTagInputSchema } from './SummaryTagUpdateManyWithWhereWithoutTagInputSchema';
import { SummaryTagScalarWhereInputSchema } from './SummaryTagScalarWhereInputSchema';

export const SummaryTagUncheckedUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.SummaryTagUncheckedUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => SummaryTagCreateWithoutTagInputSchema),z.lazy(() => SummaryTagCreateWithoutTagInputSchema).array(),z.lazy(() => SummaryTagUncheckedCreateWithoutTagInputSchema),z.lazy(() => SummaryTagUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SummaryTagCreateOrConnectWithoutTagInputSchema),z.lazy(() => SummaryTagCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SummaryTagUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => SummaryTagUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SummaryTagCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SummaryTagWhereUniqueInputSchema),z.lazy(() => SummaryTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SummaryTagWhereUniqueInputSchema),z.lazy(() => SummaryTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SummaryTagWhereUniqueInputSchema),z.lazy(() => SummaryTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SummaryTagWhereUniqueInputSchema),z.lazy(() => SummaryTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SummaryTagUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => SummaryTagUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SummaryTagUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => SummaryTagUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SummaryTagScalarWhereInputSchema),z.lazy(() => SummaryTagScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryTagUncheckedUpdateManyWithoutTagNestedInput>;

export default SummaryTagUncheckedUpdateManyWithoutTagNestedInputSchema;
