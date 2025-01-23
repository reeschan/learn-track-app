import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryCategoryWhereInputSchema } from '../inputTypeSchemas/SummaryCategoryWhereInputSchema'
import { SummaryCategoryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SummaryCategoryOrderByWithAggregationInputSchema'
import { SummaryCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/SummaryCategoryScalarFieldEnumSchema'
import { SummaryCategoryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SummaryCategoryScalarWhereWithAggregatesInputSchema'

export const SummaryCategoryGroupByArgsSchema: z.ZodType<Prisma.SummaryCategoryGroupByArgs> = z.object({
  where: SummaryCategoryWhereInputSchema.optional(),
  orderBy: z.union([ SummaryCategoryOrderByWithAggregationInputSchema.array(),SummaryCategoryOrderByWithAggregationInputSchema ]).optional(),
  by: SummaryCategoryScalarFieldEnumSchema.array(),
  having: SummaryCategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryGroupByArgs>;

export default SummaryCategoryGroupByArgsSchema;
