import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryScalarWhereInputSchema } from './SummaryScalarWhereInputSchema';
import { SummaryUpdateManyMutationInputSchema } from './SummaryUpdateManyMutationInputSchema';
import { SummaryUncheckedUpdateManyWithoutUserInputSchema } from './SummaryUncheckedUpdateManyWithoutUserInputSchema';

export const SummaryUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SummaryUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SummaryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SummaryUpdateManyMutationInputSchema),z.lazy(() => SummaryUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryUpdateManyWithWhereWithoutUserInput>;

export default SummaryUpdateManyWithWhereWithoutUserInputSchema;
