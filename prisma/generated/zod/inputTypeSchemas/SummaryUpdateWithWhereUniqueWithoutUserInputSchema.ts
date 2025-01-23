import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryWhereUniqueInputSchema } from './SummaryWhereUniqueInputSchema';
import { SummaryUpdateWithoutUserInputSchema } from './SummaryUpdateWithoutUserInputSchema';
import { SummaryUncheckedUpdateWithoutUserInputSchema } from './SummaryUncheckedUpdateWithoutUserInputSchema';

export const SummaryUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SummaryUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SummaryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SummaryUpdateWithoutUserInputSchema),z.lazy(() => SummaryUncheckedUpdateWithoutUserInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryUpdateWithWhereUniqueWithoutUserInput>;

export default SummaryUpdateWithWhereUniqueWithoutUserInputSchema;
