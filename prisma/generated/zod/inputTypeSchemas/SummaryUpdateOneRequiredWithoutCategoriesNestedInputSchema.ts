import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCreateWithoutCategoriesInputSchema } from './SummaryCreateWithoutCategoriesInputSchema';
import { SummaryUncheckedCreateWithoutCategoriesInputSchema } from './SummaryUncheckedCreateWithoutCategoriesInputSchema';
import { SummaryCreateOrConnectWithoutCategoriesInputSchema } from './SummaryCreateOrConnectWithoutCategoriesInputSchema';
import { SummaryUpsertWithoutCategoriesInputSchema } from './SummaryUpsertWithoutCategoriesInputSchema';
import { SummaryWhereUniqueInputSchema } from './SummaryWhereUniqueInputSchema';
import { SummaryUpdateToOneWithWhereWithoutCategoriesInputSchema } from './SummaryUpdateToOneWithWhereWithoutCategoriesInputSchema';
import { SummaryUpdateWithoutCategoriesInputSchema } from './SummaryUpdateWithoutCategoriesInputSchema';
import { SummaryUncheckedUpdateWithoutCategoriesInputSchema } from './SummaryUncheckedUpdateWithoutCategoriesInputSchema';

export const SummaryUpdateOneRequiredWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.SummaryUpdateOneRequiredWithoutCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => SummaryCreateWithoutCategoriesInputSchema),z.lazy(() => SummaryUncheckedCreateWithoutCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SummaryCreateOrConnectWithoutCategoriesInputSchema).optional(),
  upsert: z.lazy(() => SummaryUpsertWithoutCategoriesInputSchema).optional(),
  connect: z.lazy(() => SummaryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SummaryUpdateToOneWithWhereWithoutCategoriesInputSchema),z.lazy(() => SummaryUpdateWithoutCategoriesInputSchema),z.lazy(() => SummaryUncheckedUpdateWithoutCategoriesInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryUpdateOneRequiredWithoutCategoriesNestedInput>;

export default SummaryUpdateOneRequiredWithoutCategoriesNestedInputSchema;
