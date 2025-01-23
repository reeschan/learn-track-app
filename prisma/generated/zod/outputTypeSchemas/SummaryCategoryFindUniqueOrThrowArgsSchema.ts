import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryCategoryIncludeSchema } from '../inputTypeSchemas/SummaryCategoryIncludeSchema'
import { SummaryCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/SummaryCategoryWhereUniqueInputSchema'
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

export const SummaryCategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SummaryCategoryFindUniqueOrThrowArgs> = z.object({
  select: SummaryCategorySelectSchema.optional(),
  include: SummaryCategoryIncludeSchema.optional(),
  where: SummaryCategoryWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.SummaryCategoryFindUniqueOrThrowArgs>;

export default SummaryCategoryFindUniqueOrThrowArgsSchema;
