import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryCreateWithoutCategoryInputSchema } from './SummaryCategoryCreateWithoutCategoryInputSchema';
import { SummaryCategoryUncheckedCreateWithoutCategoryInputSchema } from './SummaryCategoryUncheckedCreateWithoutCategoryInputSchema';
import { SummaryCategoryCreateOrConnectWithoutCategoryInputSchema } from './SummaryCategoryCreateOrConnectWithoutCategoryInputSchema';
import { SummaryCategoryUpsertWithWhereUniqueWithoutCategoryInputSchema } from './SummaryCategoryUpsertWithWhereUniqueWithoutCategoryInputSchema';
import { SummaryCategoryCreateManyCategoryInputEnvelopeSchema } from './SummaryCategoryCreateManyCategoryInputEnvelopeSchema';
import { SummaryCategoryWhereUniqueInputSchema } from './SummaryCategoryWhereUniqueInputSchema';
import { SummaryCategoryUpdateWithWhereUniqueWithoutCategoryInputSchema } from './SummaryCategoryUpdateWithWhereUniqueWithoutCategoryInputSchema';
import { SummaryCategoryUpdateManyWithWhereWithoutCategoryInputSchema } from './SummaryCategoryUpdateManyWithWhereWithoutCategoryInputSchema';
import { SummaryCategoryScalarWhereInputSchema } from './SummaryCategoryScalarWhereInputSchema';

export const SummaryCategoryUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.SummaryCategoryUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => SummaryCategoryCreateWithoutCategoryInputSchema),z.lazy(() => SummaryCategoryCreateWithoutCategoryInputSchema).array(),z.lazy(() => SummaryCategoryUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => SummaryCategoryUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SummaryCategoryCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => SummaryCategoryCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SummaryCategoryUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => SummaryCategoryUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SummaryCategoryCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SummaryCategoryWhereUniqueInputSchema),z.lazy(() => SummaryCategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SummaryCategoryWhereUniqueInputSchema),z.lazy(() => SummaryCategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SummaryCategoryWhereUniqueInputSchema),z.lazy(() => SummaryCategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SummaryCategoryWhereUniqueInputSchema),z.lazy(() => SummaryCategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SummaryCategoryUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => SummaryCategoryUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SummaryCategoryUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => SummaryCategoryUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SummaryCategoryScalarWhereInputSchema),z.lazy(() => SummaryCategoryScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryUpdateManyWithoutCategoryNestedInput>;

export default SummaryCategoryUpdateManyWithoutCategoryNestedInputSchema;
