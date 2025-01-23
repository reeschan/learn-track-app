import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryUpdateManyMutationInputSchema } from '../inputTypeSchemas/SummaryUpdateManyMutationInputSchema'
import { SummaryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SummaryUncheckedUpdateManyInputSchema'
import { SummaryWhereInputSchema } from '../inputTypeSchemas/SummaryWhereInputSchema'

export const SummaryUpdateManyArgsSchema: z.ZodType<Prisma.SummaryUpdateManyArgs> = z.object({
  data: z.union([ SummaryUpdateManyMutationInputSchema,SummaryUncheckedUpdateManyInputSchema ]),
  where: SummaryWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.SummaryUpdateManyArgs>;

export default SummaryUpdateManyArgsSchema;
