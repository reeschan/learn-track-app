import type { Prisma } from '../..';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const SummaryTagUpdateManyMutationInputSchema: z.ZodType<Prisma.SummaryTagUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryTagUpdateManyMutationInput>;

export default SummaryTagUpdateManyMutationInputSchema;
