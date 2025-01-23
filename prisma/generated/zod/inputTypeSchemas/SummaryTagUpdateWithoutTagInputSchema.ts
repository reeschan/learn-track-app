import type { Prisma } from '../..';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SummaryUpdateOneRequiredWithoutTagsNestedInputSchema } from './SummaryUpdateOneRequiredWithoutTagsNestedInputSchema';

export const SummaryTagUpdateWithoutTagInputSchema: z.ZodType<Prisma.SummaryTagUpdateWithoutTagInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  summary: z.lazy(() => SummaryUpdateOneRequiredWithoutTagsNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryTagUpdateWithoutTagInput>;

export default SummaryTagUpdateWithoutTagInputSchema;
