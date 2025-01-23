import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryWhereUniqueInputSchema } from './SummaryWhereUniqueInputSchema';
import { SummaryCreateWithoutTagsInputSchema } from './SummaryCreateWithoutTagsInputSchema';
import { SummaryUncheckedCreateWithoutTagsInputSchema } from './SummaryUncheckedCreateWithoutTagsInputSchema';

export const SummaryCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.SummaryCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => SummaryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SummaryCreateWithoutTagsInputSchema),z.lazy(() => SummaryUncheckedCreateWithoutTagsInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryCreateOrConnectWithoutTagsInput>;

export default SummaryCreateOrConnectWithoutTagsInputSchema;
