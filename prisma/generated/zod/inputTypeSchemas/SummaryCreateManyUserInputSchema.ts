import type { Prisma } from '../..';

import { z } from 'zod';

export const SummaryCreateManyUserInputSchema: z.ZodType<Prisma.SummaryCreateManyUserInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  summary: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.SummaryCreateManyUserInput>;

export default SummaryCreateManyUserInputSchema;
