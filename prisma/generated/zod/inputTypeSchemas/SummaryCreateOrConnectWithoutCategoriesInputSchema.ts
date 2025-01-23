import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryWhereUniqueInputSchema } from './SummaryWhereUniqueInputSchema';
import { SummaryCreateWithoutCategoriesInputSchema } from './SummaryCreateWithoutCategoriesInputSchema';
import { SummaryUncheckedCreateWithoutCategoriesInputSchema } from './SummaryUncheckedCreateWithoutCategoriesInputSchema';

export const SummaryCreateOrConnectWithoutCategoriesInputSchema: z.ZodType<Prisma.SummaryCreateOrConnectWithoutCategoriesInput> = z.object({
  where: z.lazy(() => SummaryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SummaryCreateWithoutCategoriesInputSchema),z.lazy(() => SummaryUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryCreateOrConnectWithoutCategoriesInput>;

export default SummaryCreateOrConnectWithoutCategoriesInputSchema;
