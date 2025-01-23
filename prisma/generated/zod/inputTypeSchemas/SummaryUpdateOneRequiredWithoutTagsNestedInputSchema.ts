import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCreateWithoutTagsInputSchema } from './SummaryCreateWithoutTagsInputSchema';
import { SummaryUncheckedCreateWithoutTagsInputSchema } from './SummaryUncheckedCreateWithoutTagsInputSchema';
import { SummaryCreateOrConnectWithoutTagsInputSchema } from './SummaryCreateOrConnectWithoutTagsInputSchema';
import { SummaryUpsertWithoutTagsInputSchema } from './SummaryUpsertWithoutTagsInputSchema';
import { SummaryWhereUniqueInputSchema } from './SummaryWhereUniqueInputSchema';
import { SummaryUpdateToOneWithWhereWithoutTagsInputSchema } from './SummaryUpdateToOneWithWhereWithoutTagsInputSchema';
import { SummaryUpdateWithoutTagsInputSchema } from './SummaryUpdateWithoutTagsInputSchema';
import { SummaryUncheckedUpdateWithoutTagsInputSchema } from './SummaryUncheckedUpdateWithoutTagsInputSchema';

export const SummaryUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.SummaryUpdateOneRequiredWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => SummaryCreateWithoutTagsInputSchema),z.lazy(() => SummaryUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SummaryCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => SummaryUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => SummaryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SummaryUpdateToOneWithWhereWithoutTagsInputSchema),z.lazy(() => SummaryUpdateWithoutTagsInputSchema),z.lazy(() => SummaryUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryUpdateOneRequiredWithoutTagsNestedInput>;

export default SummaryUpdateOneRequiredWithoutTagsNestedInputSchema;
