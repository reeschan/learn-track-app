import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryCategoryCreateManyInputSchema } from '../inputTypeSchemas/SummaryCategoryCreateManyInputSchema'

export const SummaryCategoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SummaryCategoryCreateManyAndReturnArgs> = z.object({
  data: z.union([ SummaryCategoryCreateManyInputSchema,SummaryCategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryCreateManyAndReturnArgs>;

export default SummaryCategoryCreateManyAndReturnArgsSchema;
