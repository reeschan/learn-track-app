import type { Prisma } from '../..';

import { z } from 'zod';

export const SummaryCreateManyInputSchema: z.ZodType<Prisma.SummaryCreateManyInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  title: z.string(),
  content: z.string(),
  summary: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.SummaryCreateManyInput>;

export default SummaryCreateManyInputSchema;
