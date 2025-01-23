import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryWhereUniqueInputSchema } from './SummaryCategoryWhereUniqueInputSchema';
import { SummaryCategoryUpdateWithoutCategoryInputSchema } from './SummaryCategoryUpdateWithoutCategoryInputSchema';
import { SummaryCategoryUncheckedUpdateWithoutCategoryInputSchema } from './SummaryCategoryUncheckedUpdateWithoutCategoryInputSchema';

export const SummaryCategoryUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.SummaryCategoryUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => SummaryCategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SummaryCategoryUpdateWithoutCategoryInputSchema),z.lazy(() => SummaryCategoryUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryCategoryUpdateWithWhereUniqueWithoutCategoryInput>;

export default SummaryCategoryUpdateWithWhereUniqueWithoutCategoryInputSchema;
