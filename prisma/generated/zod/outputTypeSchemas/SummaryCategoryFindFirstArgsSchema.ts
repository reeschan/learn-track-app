import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryCategoryIncludeSchema } from '../inputTypeSchemas/SummaryCategoryIncludeSchema'
import { SummaryCategoryWhereInputSchema } from '../inputTypeSchemas/SummaryCategoryWhereInputSchema'
import { SummaryCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/SummaryCategoryOrderByWithRelationInputSchema'
import { SummaryCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/SummaryCategoryWhereUniqueInputSchema'
import { SummaryCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/SummaryCategoryScalarFieldEnumSchema'
import { SummaryArgsSchema } from "../outputTypeSchemas/SummaryArgsSchema"
import { CategoryArgsSchema } from "../outputTypeSchemas/CategoryArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SummaryCategorySelectSchema: z.ZodType<Prisma.SummaryCategorySelect> = z.object({
  summaryId: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  summary: z.union([z.boolean(),z.lazy(() => SummaryArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
}).strict()

export const SummaryCategoryFindFirstArgsSchema: z.ZodType<Prisma.SummaryCategoryFindFirstArgs> = z.object({
  select: SummaryCategorySelectSchema.optional(),
  include: SummaryCategoryIncludeSchema.optional(),
  where: SummaryCategoryWhereInputSchema.optional(),
  orderBy: z.union([ SummaryCategoryOrderByWithRelationInputSchema.array(),SummaryCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: SummaryCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SummaryCategoryScalarFieldEnumSchema,SummaryCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryFindFirstArgs>;

export default SummaryCategoryFindFirstArgsSchema;
