import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryUpdateWithoutCategoriesInputSchema } from './SummaryUpdateWithoutCategoriesInputSchema';
import { SummaryUncheckedUpdateWithoutCategoriesInputSchema } from './SummaryUncheckedUpdateWithoutCategoriesInputSchema';
import { SummaryCreateWithoutCategoriesInputSchema } from './SummaryCreateWithoutCategoriesInputSchema';
import { SummaryUncheckedCreateWithoutCategoriesInputSchema } from './SummaryUncheckedCreateWithoutCategoriesInputSchema';
import { SummaryWhereInputSchema } from './SummaryWhereInputSchema';

export const SummaryUpsertWithoutCategoriesInputSchema: z.ZodType<Prisma.SummaryUpsertWithoutCategoriesInput> = z.object({
  update: z.union([ z.lazy(() => SummaryUpdateWithoutCategoriesInputSchema),z.lazy(() => SummaryUncheckedUpdateWithoutCategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => SummaryCreateWithoutCategoriesInputSchema),z.lazy(() => SummaryUncheckedCreateWithoutCategoriesInputSchema) ]),
  where: z.lazy(() => SummaryWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryUpsertWithoutCategoriesInput>;

export default SummaryUpsertWithoutCategoriesInputSchema;
