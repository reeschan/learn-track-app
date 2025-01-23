import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryWhereUniqueInputSchema } from './SummaryWhereUniqueInputSchema';
import { SummaryCreateWithoutUserInputSchema } from './SummaryCreateWithoutUserInputSchema';
import { SummaryUncheckedCreateWithoutUserInputSchema } from './SummaryUncheckedCreateWithoutUserInputSchema';

export const SummaryCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SummaryCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SummaryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SummaryCreateWithoutUserInputSchema),z.lazy(() => SummaryUncheckedCreateWithoutUserInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryCreateOrConnectWithoutUserInput>;

export default SummaryCreateOrConnectWithoutUserInputSchema;
