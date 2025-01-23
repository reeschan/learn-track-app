import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryTagWhereInputSchema } from '../inputTypeSchemas/SummaryTagWhereInputSchema'
import { SummaryTagOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SummaryTagOrderByWithAggregationInputSchema'
import { SummaryTagScalarFieldEnumSchema } from '../inputTypeSchemas/SummaryTagScalarFieldEnumSchema'
import { SummaryTagScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SummaryTagScalarWhereWithAggregatesInputSchema'

export const SummaryTagGroupByArgsSchema: z.ZodType<Prisma.SummaryTagGroupByArgs> = z.object({
  where: SummaryTagWhereInputSchema.optional(),
  orderBy: z.union([ SummaryTagOrderByWithAggregationInputSchema.array(),SummaryTagOrderByWithAggregationInputSchema ]).optional(),
  by: SummaryTagScalarFieldEnumSchema.array(),
  having: SummaryTagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.SummaryTagGroupByArgs>;

export default SummaryTagGroupByArgsSchema;
