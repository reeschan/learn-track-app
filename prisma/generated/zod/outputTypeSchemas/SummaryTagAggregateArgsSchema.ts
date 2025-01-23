import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryTagWhereInputSchema } from '../inputTypeSchemas/SummaryTagWhereInputSchema'
import { SummaryTagOrderByWithRelationInputSchema } from '../inputTypeSchemas/SummaryTagOrderByWithRelationInputSchema'
import { SummaryTagWhereUniqueInputSchema } from '../inputTypeSchemas/SummaryTagWhereUniqueInputSchema'

export const SummaryTagAggregateArgsSchema: z.ZodType<Prisma.SummaryTagAggregateArgs> = z.object({
  where: SummaryTagWhereInputSchema.optional(),
  orderBy: z.union([ SummaryTagOrderByWithRelationInputSchema.array(),SummaryTagOrderByWithRelationInputSchema ]).optional(),
  cursor: SummaryTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.SummaryTagAggregateArgs>;

export default SummaryTagAggregateArgsSchema;
