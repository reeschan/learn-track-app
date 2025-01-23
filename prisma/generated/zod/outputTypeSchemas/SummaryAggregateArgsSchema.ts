import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryWhereInputSchema } from '../inputTypeSchemas/SummaryWhereInputSchema'
import { SummaryOrderByWithRelationInputSchema } from '../inputTypeSchemas/SummaryOrderByWithRelationInputSchema'
import { SummaryWhereUniqueInputSchema } from '../inputTypeSchemas/SummaryWhereUniqueInputSchema'

export const SummaryAggregateArgsSchema: z.ZodType<Prisma.SummaryAggregateArgs> = z.object({
  where: SummaryWhereInputSchema.optional(),
  orderBy: z.union([ SummaryOrderByWithRelationInputSchema.array(),SummaryOrderByWithRelationInputSchema ]).optional(),
  cursor: SummaryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.SummaryAggregateArgs>;

export default SummaryAggregateArgsSchema;
