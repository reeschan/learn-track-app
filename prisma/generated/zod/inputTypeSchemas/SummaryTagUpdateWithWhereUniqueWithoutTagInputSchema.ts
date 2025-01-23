import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagWhereUniqueInputSchema } from './SummaryTagWhereUniqueInputSchema';
import { SummaryTagUpdateWithoutTagInputSchema } from './SummaryTagUpdateWithoutTagInputSchema';
import { SummaryTagUncheckedUpdateWithoutTagInputSchema } from './SummaryTagUncheckedUpdateWithoutTagInputSchema';

export const SummaryTagUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.SummaryTagUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => SummaryTagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SummaryTagUpdateWithoutTagInputSchema),z.lazy(() => SummaryTagUncheckedUpdateWithoutTagInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryTagUpdateWithWhereUniqueWithoutTagInput>;

export default SummaryTagUpdateWithWhereUniqueWithoutTagInputSchema;
