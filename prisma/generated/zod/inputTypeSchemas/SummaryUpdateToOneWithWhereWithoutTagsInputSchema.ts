import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryWhereInputSchema } from './SummaryWhereInputSchema';
import { SummaryUpdateWithoutTagsInputSchema } from './SummaryUpdateWithoutTagsInputSchema';
import { SummaryUncheckedUpdateWithoutTagsInputSchema } from './SummaryUncheckedUpdateWithoutTagsInputSchema';

export const SummaryUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.SummaryUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => SummaryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SummaryUpdateWithoutTagsInputSchema),z.lazy(() => SummaryUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict() as z.ZodType<Prisma.SummaryUpdateToOneWithWhereWithoutTagsInput>;

export default SummaryUpdateToOneWithWhereWithoutTagsInputSchema;
