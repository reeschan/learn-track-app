import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryTagWhereInputSchema } from '../inputTypeSchemas/SummaryTagWhereInputSchema'

export const SummaryTagDeleteManyArgsSchema: z.ZodType<Prisma.SummaryTagDeleteManyArgs> = z.object({
  where: SummaryTagWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.SummaryTagDeleteManyArgs>;

export default SummaryTagDeleteManyArgsSchema;
