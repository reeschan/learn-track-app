import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryCategoryIncludeSchema } from '../inputTypeSchemas/SummaryCategoryIncludeSchema'
import { SummaryCategoryUpdateInputSchema } from '../inputTypeSchemas/SummaryCategoryUpdateInputSchema'
import { SummaryCategoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/SummaryCategoryUncheckedUpdateInputSchema'
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

export const SummaryCategoryUpdateArgsSchema: z.ZodType<Prisma.SummaryCategoryUpdateArgs> = z.object({
  select: SummaryCategorySelectSchema.optional(),
  include: SummaryCategoryIncludeSchema.optional(),
  data: z.union([ SummaryCategoryUpdateInputSchema,SummaryCategoryUncheckedUpdateInputSchema ]),
  where: SummaryCategoryWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.SummaryCategoryUpdateArgs>;

export default SummaryCategoryUpdateArgsSchema;
