import type { Prisma } from '../..';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SummaryUpdateOneRequiredWithoutTagsNestedInputSchema } from './SummaryUpdateOneRequiredWithoutTagsNestedInputSchema';
import { TagUpdateOneRequiredWithoutSummaryTagsNestedInputSchema } from './TagUpdateOneRequiredWithoutSummaryTagsNestedInputSchema';

export const SummaryTagUpdateInputSchema: z.ZodType<Prisma.SummaryTagUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  summary: z.lazy(() => SummaryUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutSummaryTagsNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryTagUpdateInput>;

export default SummaryTagUpdateInputSchema;
