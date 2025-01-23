import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryWhereUniqueInputSchema } from './SummaryCategoryWhereUniqueInputSchema';
import { SummaryCategoryCreateWithoutCategoryInputSchema } from './SummaryCategoryCreateWithoutCategoryInputSchema';
import { SummaryCategoryUncheckedCreateWithoutCategoryInputSchema } from './SummaryCategoryUncheckedCreateWithoutCategoryInputSchema';

export const SummaryCategoryCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.SummaryCategoryCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => SummaryCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SummaryCategoryCreateWithoutCategoryInputSchema),z.lazy(() => SummaryCategoryUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryCategoryCreateOrConnectWithoutCategoryInput>;

export default SummaryCategoryCreateOrConnectWithoutCategoryInputSchema;
