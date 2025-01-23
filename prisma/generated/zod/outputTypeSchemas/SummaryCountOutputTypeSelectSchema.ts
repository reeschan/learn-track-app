import { z } from 'zod';
import type { Prisma } from '../..';

export const SummaryCountOutputTypeSelectSchema: z.ZodType<Prisma.SummaryCountOutputTypeSelect> = z.object({
  tags: z.boolean().optional(),
  categories: z.boolean().optional(),
}).strict();

export default SummaryCountOutputTypeSelectSchema;
