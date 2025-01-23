import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagScalarWhereInputSchema } from './SummaryTagScalarWhereInputSchema';
import { SummaryTagUpdateManyMutationInputSchema } from './SummaryTagUpdateManyMutationInputSchema';
import { SummaryTagUncheckedUpdateManyWithoutTagInputSchema } from './SummaryTagUncheckedUpdateManyWithoutTagInputSchema';

export const SummaryTagUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.SummaryTagUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => SummaryTagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SummaryTagUpdateManyMutationInputSchema),z.lazy(() => SummaryTagUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryTagUpdateManyWithWhereWithoutTagInput>;

export default SummaryTagUpdateManyWithWhereWithoutTagInputSchema;
