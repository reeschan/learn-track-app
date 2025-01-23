import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryWhereUniqueInputSchema } from './SummaryCategoryWhereUniqueInputSchema';
import { SummaryCategoryUpdateWithoutCategoryInputSchema } from './SummaryCategoryUpdateWithoutCategoryInputSchema';
import { SummaryCategoryUncheckedUpdateWithoutCategoryInputSchema } from './SummaryCategoryUncheckedUpdateWithoutCategoryInputSchema';
import { SummaryCategoryCreateWithoutCategoryInputSchema } from './SummaryCategoryCreateWithoutCategoryInputSchema';
import { SummaryCategoryUncheckedCreateWithoutCategoryInputSchema } from './SummaryCategoryUncheckedCreateWithoutCategoryInputSchema';

export const SummaryCategoryUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.SummaryCategoryUpsertWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => SummaryCategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SummaryCategoryUpdateWithoutCategoryInputSchema),z.lazy(() => SummaryCategoryUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => SummaryCategoryCreateWithoutCategoryInputSchema),z.lazy(() => SummaryCategoryUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryCategoryUpsertWithWhereUniqueWithoutCategoryInput>;

export default SummaryCategoryUpsertWithWhereUniqueWithoutCategoryInputSchema;
