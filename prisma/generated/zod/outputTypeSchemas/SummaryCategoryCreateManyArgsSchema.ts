import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryCategoryCreateManyInputSchema } from '../inputTypeSchemas/SummaryCategoryCreateManyInputSchema'

export const SummaryCategoryCreateManyArgsSchema: z.ZodType<Prisma.SummaryCategoryCreateManyArgs> = z.object({
  data: z.union([ SummaryCategoryCreateManyInputSchema,SummaryCategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryCreateManyArgs>;

export default SummaryCategoryCreateManyArgsSchema;
