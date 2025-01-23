import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCreateWithoutUserInputSchema } from './SummaryCreateWithoutUserInputSchema';
import { SummaryUncheckedCreateWithoutUserInputSchema } from './SummaryUncheckedCreateWithoutUserInputSchema';
import { SummaryCreateOrConnectWithoutUserInputSchema } from './SummaryCreateOrConnectWithoutUserInputSchema';
import { SummaryUpsertWithWhereUniqueWithoutUserInputSchema } from './SummaryUpsertWithWhereUniqueWithoutUserInputSchema';
import { SummaryCreateManyUserInputEnvelopeSchema } from './SummaryCreateManyUserInputEnvelopeSchema';
import { SummaryWhereUniqueInputSchema } from './SummaryWhereUniqueInputSchema';
import { SummaryUpdateWithWhereUniqueWithoutUserInputSchema } from './SummaryUpdateWithWhereUniqueWithoutUserInputSchema';
import { SummaryUpdateManyWithWhereWithoutUserInputSchema } from './SummaryUpdateManyWithWhereWithoutUserInputSchema';
import { SummaryScalarWhereInputSchema } from './SummaryScalarWhereInputSchema';

export const SummaryUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SummaryUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SummaryCreateWithoutUserInputSchema),z.lazy(() => SummaryCreateWithoutUserInputSchema).array(),z.lazy(() => SummaryUncheckedCreateWithoutUserInputSchema),z.lazy(() => SummaryUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SummaryCreateOrConnectWithoutUserInputSchema),z.lazy(() => SummaryCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SummaryUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SummaryUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SummaryCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SummaryWhereUniqueInputSchema),z.lazy(() => SummaryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SummaryWhereUniqueInputSchema),z.lazy(() => SummaryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SummaryWhereUniqueInputSchema),z.lazy(() => SummaryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SummaryWhereUniqueInputSchema),z.lazy(() => SummaryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SummaryUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SummaryUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SummaryUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SummaryUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SummaryScalarWhereInputSchema),z.lazy(() => SummaryScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryUpdateManyWithoutUserNestedInput>;

export default SummaryUpdateManyWithoutUserNestedInputSchema;
