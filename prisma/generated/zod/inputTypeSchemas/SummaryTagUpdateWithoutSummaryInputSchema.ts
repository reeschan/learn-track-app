import type { Prisma } from '../..';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TagUpdateOneRequiredWithoutSummaryTagsNestedInputSchema } from './TagUpdateOneRequiredWithoutSummaryTagsNestedInputSchema';

export const SummaryTagUpdateWithoutSummaryInputSchema: z.ZodType<Prisma.SummaryTagUpdateWithoutSummaryInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutSummaryTagsNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryTagUpdateWithoutSummaryInput>;

export default SummaryTagUpdateWithoutSummaryInputSchema;
