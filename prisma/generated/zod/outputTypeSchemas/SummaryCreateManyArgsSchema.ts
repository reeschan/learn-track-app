import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryCreateManyInputSchema } from '../inputTypeSchemas/SummaryCreateManyInputSchema'

export const SummaryCreateManyArgsSchema: z.ZodType<Prisma.SummaryCreateManyArgs> = z.object({
  data: z.union([ SummaryCreateManyInputSchema,SummaryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.SummaryCreateManyArgs>;

export default SummaryCreateManyArgsSchema;
