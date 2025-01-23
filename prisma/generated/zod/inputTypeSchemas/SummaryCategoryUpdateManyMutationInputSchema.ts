import type { Prisma } from '../..';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const SummaryCategoryUpdateManyMutationInputSchema: z.ZodType<Prisma.SummaryCategoryUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryUpdateManyMutationInput>;

export default SummaryCategoryUpdateManyMutationInputSchema;
