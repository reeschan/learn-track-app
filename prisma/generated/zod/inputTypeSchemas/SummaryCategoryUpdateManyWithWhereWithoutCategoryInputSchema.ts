import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryScalarWhereInputSchema } from './SummaryCategoryScalarWhereInputSchema';
import { SummaryCategoryUpdateManyMutationInputSchema } from './SummaryCategoryUpdateManyMutationInputSchema';
import { SummaryCategoryUncheckedUpdateManyWithoutCategoryInputSchema } from './SummaryCategoryUncheckedUpdateManyWithoutCategoryInputSchema';

export const SummaryCategoryUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.SummaryCategoryUpdateManyWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => SummaryCategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SummaryCategoryUpdateManyMutationInputSchema),z.lazy(() => SummaryCategoryUncheckedUpdateManyWithoutCategoryInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryCategoryUpdateManyWithWhereWithoutCategoryInput>;

export default SummaryCategoryUpdateManyWithWhereWithoutCategoryInputSchema;
