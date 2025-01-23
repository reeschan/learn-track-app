import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryWhereUniqueInputSchema } from './SummaryWhereUniqueInputSchema';
import { SummaryUpdateWithoutUserInputSchema } from './SummaryUpdateWithoutUserInputSchema';
import { SummaryUncheckedUpdateWithoutUserInputSchema } from './SummaryUncheckedUpdateWithoutUserInputSchema';
import { SummaryCreateWithoutUserInputSchema } from './SummaryCreateWithoutUserInputSchema';
import { SummaryUncheckedCreateWithoutUserInputSchema } from './SummaryUncheckedCreateWithoutUserInputSchema';

export const SummaryUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SummaryUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SummaryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SummaryUpdateWithoutUserInputSchema),z.lazy(() => SummaryUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SummaryCreateWithoutUserInputSchema),z.lazy(() => SummaryUncheckedCreateWithoutUserInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryUpsertWithWhereUniqueWithoutUserInput>;

export default SummaryUpsertWithWhereUniqueWithoutUserInputSchema;
