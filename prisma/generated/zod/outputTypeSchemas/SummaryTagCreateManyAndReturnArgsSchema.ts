import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryTagCreateManyInputSchema } from '../inputTypeSchemas/SummaryTagCreateManyInputSchema'

export const SummaryTagCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SummaryTagCreateManyAndReturnArgs> = z.object({
  data: z.union([ SummaryTagCreateManyInputSchema,SummaryTagCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.SummaryTagCreateManyAndReturnArgs>;

export default SummaryTagCreateManyAndReturnArgsSchema;
