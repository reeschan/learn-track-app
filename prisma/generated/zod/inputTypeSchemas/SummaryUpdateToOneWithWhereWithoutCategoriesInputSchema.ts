import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryWhereInputSchema } from './SummaryWhereInputSchema';
import { SummaryUpdateWithoutCategoriesInputSchema } from './SummaryUpdateWithoutCategoriesInputSchema';
import { SummaryUncheckedUpdateWithoutCategoriesInputSchema } from './SummaryUncheckedUpdateWithoutCategoriesInputSchema';

export const SummaryUpdateToOneWithWhereWithoutCategoriesInputSchema: z.ZodType<Prisma.SummaryUpdateToOneWithWhereWithoutCategoriesInput> = z.object({
  where: z.lazy(() => SummaryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SummaryUpdateWithoutCategoriesInputSchema),z.lazy(() => SummaryUncheckedUpdateWithoutCategoriesInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryUpdateToOneWithWhereWithoutCategoriesInput>;

export default SummaryUpdateToOneWithWhereWithoutCategoriesInputSchema;
