import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryCategoryWhereInputSchema } from '../inputTypeSchemas/SummaryCategoryWhereInputSchema'
import { SummaryCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/SummaryCategoryOrderByWithRelationInputSchema'
import { SummaryCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/SummaryCategoryWhereUniqueInputSchema'

export const SummaryCategoryAggregateArgsSchema: z.ZodType<Prisma.SummaryCategoryAggregateArgs> = z.object({
  where: SummaryCategoryWhereInputSchema.optional(),
  orderBy: z.union([ SummaryCategoryOrderByWithRelationInputSchema.array(),SummaryCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: SummaryCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryAggregateArgs>;

export default SummaryCategoryAggregateArgsSchema;
