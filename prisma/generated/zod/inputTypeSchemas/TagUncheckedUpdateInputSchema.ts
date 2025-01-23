import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SummaryTagUncheckedUpdateManyWithoutTagNestedInputSchema } from './SummaryTagUncheckedUpdateManyWithoutTagNestedInputSchema';

export const TagUncheckedUpdateInputSchema: z.ZodType<Prisma.TagUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  summaryTags: z.lazy(() => SummaryTagUncheckedUpdateManyWithoutTagNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.TagUncheckedUpdateInput>;

export default TagUncheckedUpdateInputSchema;
