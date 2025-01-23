import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryWhereInputSchema } from '../inputTypeSchemas/SummaryWhereInputSchema'
import { SummaryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SummaryOrderByWithAggregationInputSchema'
import { SummaryScalarFieldEnumSchema } from '../inputTypeSchemas/SummaryScalarFieldEnumSchema'
import { SummaryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SummaryScalarWhereWithAggregatesInputSchema'

export const SummaryGroupByArgsSchema: z.ZodType<Prisma.SummaryGroupByArgs> = z.object({
  where: SummaryWhereInputSchema.optional(),
  orderBy: z.union([ SummaryOrderByWithAggregationInputSchema.array(),SummaryOrderByWithAggregationInputSchema ]).optional(),
  by: SummaryScalarFieldEnumSchema.array(),
  having: SummaryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.SummaryGroupByArgs>;

export default SummaryGroupByArgsSchema;
