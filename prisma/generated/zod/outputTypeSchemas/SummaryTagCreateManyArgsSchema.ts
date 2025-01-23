import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryTagCreateManyInputSchema } from '../inputTypeSchemas/SummaryTagCreateManyInputSchema'

export const SummaryTagCreateManyArgsSchema: z.ZodType<Prisma.SummaryTagCreateManyArgs> = z.object({
  data: z.union([ SummaryTagCreateManyInputSchema,SummaryTagCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.SummaryTagCreateManyArgs>;

export default SummaryTagCreateManyArgsSchema;
