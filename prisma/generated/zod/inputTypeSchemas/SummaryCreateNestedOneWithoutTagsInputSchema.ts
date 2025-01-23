import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCreateWithoutTagsInputSchema } from './SummaryCreateWithoutTagsInputSchema';
import { SummaryUncheckedCreateWithoutTagsInputSchema } from './SummaryUncheckedCreateWithoutTagsInputSchema';
import { SummaryCreateOrConnectWithoutTagsInputSchema } from './SummaryCreateOrConnectWithoutTagsInputSchema';
import { SummaryWhereUniqueInputSchema } from './SummaryWhereUniqueInputSchema';

export const SummaryCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.SummaryCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => SummaryCreateWithoutTagsInputSchema),z.lazy(() => SummaryUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SummaryCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => SummaryWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryCreateNestedOneWithoutTagsInput>;

export default SummaryCreateNestedOneWithoutTagsInputSchema;
