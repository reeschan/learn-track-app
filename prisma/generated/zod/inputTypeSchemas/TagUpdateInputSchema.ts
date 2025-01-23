import type { Prisma } from '../..';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SummaryTagUpdateManyWithoutTagNestedInputSchema } from './SummaryTagUpdateManyWithoutTagNestedInputSchema';

export const TagUpdateInputSchema: z.ZodType<Prisma.TagUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  summaryTags: z.lazy(() => SummaryTagUpdateManyWithoutTagNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.TagUpdateInput>;

export default TagUpdateInputSchema;
