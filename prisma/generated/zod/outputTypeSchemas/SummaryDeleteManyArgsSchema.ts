import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryWhereInputSchema } from '../inputTypeSchemas/SummaryWhereInputSchema'

export const SummaryDeleteManyArgsSchema: z.ZodType<Prisma.SummaryDeleteManyArgs> = z.object({
  where: SummaryWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.SummaryDeleteManyArgs>;

export default SummaryDeleteManyArgsSchema;
