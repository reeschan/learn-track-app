import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryCreateWithoutCategoryInputSchema } from './SummaryCategoryCreateWithoutCategoryInputSchema';
import { SummaryCategoryUncheckedCreateWithoutCategoryInputSchema } from './SummaryCategoryUncheckedCreateWithoutCategoryInputSchema';
import { SummaryCategoryCreateOrConnectWithoutCategoryInputSchema } from './SummaryCategoryCreateOrConnectWithoutCategoryInputSchema';
import { SummaryCategoryCreateManyCategoryInputEnvelopeSchema } from './SummaryCategoryCreateManyCategoryInputEnvelopeSchema';
import { SummaryCategoryWhereUniqueInputSchema } from './SummaryCategoryWhereUniqueInputSchema';

export const SummaryCategoryCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.SummaryCategoryCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => SummaryCategoryCreateWithoutCategoryInputSchema),z.lazy(() => SummaryCategoryCreateWithoutCategoryInputSchema).array(),z.lazy(() => SummaryCategoryUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => SummaryCategoryUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SummaryCategoryCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => SummaryCategoryCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SummaryCategoryCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SummaryCategoryWhereUniqueInputSchema),z.lazy(() => SummaryCategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryCreateNestedManyWithoutCategoryInput>;

export default SummaryCategoryCreateNestedManyWithoutCategoryInputSchema;
