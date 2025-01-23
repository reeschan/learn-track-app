import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryCreateManyInputSchema } from '../inputTypeSchemas/SummaryCreateManyInputSchema'

export const SummaryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SummaryCreateManyAndReturnArgs> = z.object({
  data: z.union([ SummaryCreateManyInputSchema,SummaryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.SummaryCreateManyAndReturnArgs>;

export default SummaryCreateManyAndReturnArgsSchema;
