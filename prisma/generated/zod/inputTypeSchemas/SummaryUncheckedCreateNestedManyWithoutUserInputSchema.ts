import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCreateWithoutUserInputSchema } from './SummaryCreateWithoutUserInputSchema';
import { SummaryUncheckedCreateWithoutUserInputSchema } from './SummaryUncheckedCreateWithoutUserInputSchema';
import { SummaryCreateOrConnectWithoutUserInputSchema } from './SummaryCreateOrConnectWithoutUserInputSchema';
import { SummaryCreateManyUserInputEnvelopeSchema } from './SummaryCreateManyUserInputEnvelopeSchema';
import { SummaryWhereUniqueInputSchema } from './SummaryWhereUniqueInputSchema';

export const SummaryUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SummaryUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SummaryCreateWithoutUserInputSchema),z.lazy(() => SummaryCreateWithoutUserInputSchema).array(),z.lazy(() => SummaryUncheckedCreateWithoutUserInputSchema),z.lazy(() => SummaryUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SummaryCreateOrConnectWithoutUserInputSchema),z.lazy(() => SummaryCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SummaryCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SummaryWhereUniqueInputSchema),z.lazy(() => SummaryWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryUncheckedCreateNestedManyWithoutUserInput>;

export default SummaryUncheckedCreateNestedManyWithoutUserInputSchema;
