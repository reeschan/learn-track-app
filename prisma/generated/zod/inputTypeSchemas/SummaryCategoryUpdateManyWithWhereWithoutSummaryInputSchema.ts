import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryScalarWhereInputSchema } from './SummaryCategoryScalarWhereInputSchema';
import { SummaryCategoryUpdateManyMutationInputSchema } from './SummaryCategoryUpdateManyMutationInputSchema';
import { SummaryCategoryUncheckedUpdateManyWithoutSummaryInputSchema } from './SummaryCategoryUncheckedUpdateManyWithoutSummaryInputSchema';

export const SummaryCategoryUpdateManyWithWhereWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryCategoryUpdateManyWithWhereWithoutSummaryInput> = z.object({
  where: z.lazy(() => SummaryCategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SummaryCategoryUpdateManyMutationInputSchema),z.lazy(() => SummaryCategoryUncheckedUpdateManyWithoutSummaryInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryCategoryUpdateManyWithWhereWithoutSummaryInput>;

export default SummaryCategoryUpdateManyWithWhereWithoutSummaryInputSchema;
