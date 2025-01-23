import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryCategoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/SummaryCategoryUpdateManyMutationInputSchema'
import { SummaryCategoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SummaryCategoryUncheckedUpdateManyInputSchema'
import { SummaryCategoryWhereInputSchema } from '../inputTypeSchemas/SummaryCategoryWhereInputSchema'

export const SummaryCategoryUpdateManyArgsSchema: z.ZodType<Prisma.SummaryCategoryUpdateManyArgs> = z.object({
  data: z.union([ SummaryCategoryUpdateManyMutationInputSchema,SummaryCategoryUncheckedUpdateManyInputSchema ]),
  where: SummaryCategoryWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryUpdateManyArgs>;

export default SummaryCategoryUpdateManyArgsSchema;
