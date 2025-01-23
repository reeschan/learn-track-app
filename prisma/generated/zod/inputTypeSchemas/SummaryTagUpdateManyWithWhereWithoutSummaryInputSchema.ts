import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagScalarWhereInputSchema } from './SummaryTagScalarWhereInputSchema';
import { SummaryTagUpdateManyMutationInputSchema } from './SummaryTagUpdateManyMutationInputSchema';
import { SummaryTagUncheckedUpdateManyWithoutSummaryInputSchema } from './SummaryTagUncheckedUpdateManyWithoutSummaryInputSchema';

export const SummaryTagUpdateManyWithWhereWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryTagUpdateManyWithWhereWithoutSummaryInput> = z.object({
  where: z.lazy(() => SummaryTagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SummaryTagUpdateManyMutationInputSchema),z.lazy(() => SummaryTagUncheckedUpdateManyWithoutSummaryInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryTagUpdateManyWithWhereWithoutSummaryInput>;

export default SummaryTagUpdateManyWithWhereWithoutSummaryInputSchema;
