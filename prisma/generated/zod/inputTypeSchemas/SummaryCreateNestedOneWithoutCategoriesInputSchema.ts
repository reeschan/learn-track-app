import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCreateWithoutCategoriesInputSchema } from './SummaryCreateWithoutCategoriesInputSchema';
import { SummaryUncheckedCreateWithoutCategoriesInputSchema } from './SummaryUncheckedCreateWithoutCategoriesInputSchema';
import { SummaryCreateOrConnectWithoutCategoriesInputSchema } from './SummaryCreateOrConnectWithoutCategoriesInputSchema';
import { SummaryWhereUniqueInputSchema } from './SummaryWhereUniqueInputSchema';

export const SummaryCreateNestedOneWithoutCategoriesInputSchema: z.ZodType<Prisma.SummaryCreateNestedOneWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => SummaryCreateWithoutCategoriesInputSchema),z.lazy(() => SummaryUncheckedCreateWithoutCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SummaryCreateOrConnectWithoutCategoriesInputSchema).optional(),
  connect: z.lazy(() => SummaryWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryCreateNestedOneWithoutCategoriesInput>;

export default SummaryCreateNestedOneWithoutCategoriesInputSchema;
