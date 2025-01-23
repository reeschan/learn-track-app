import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryTagUpdateManyMutationInputSchema } from '../inputTypeSchemas/SummaryTagUpdateManyMutationInputSchema'
import { SummaryTagUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SummaryTagUncheckedUpdateManyInputSchema'
import { SummaryTagWhereInputSchema } from '../inputTypeSchemas/SummaryTagWhereInputSchema'

export const SummaryTagUpdateManyArgsSchema: z.ZodType<Prisma.SummaryTagUpdateManyArgs> = z.object({
  data: z.union([ SummaryTagUpdateManyMutationInputSchema,SummaryTagUncheckedUpdateManyInputSchema ]),
  where: SummaryTagWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.SummaryTagUpdateManyArgs>;

export default SummaryTagUpdateManyArgsSchema;
