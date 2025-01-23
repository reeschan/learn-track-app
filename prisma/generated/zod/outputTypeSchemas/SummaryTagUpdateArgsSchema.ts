import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryTagIncludeSchema } from '../inputTypeSchemas/SummaryTagIncludeSchema'
import { SummaryTagUpdateInputSchema } from '../inputTypeSchemas/SummaryTagUpdateInputSchema'
import { SummaryTagUncheckedUpdateInputSchema } from '../inputTypeSchemas/SummaryTagUncheckedUpdateInputSchema'
import { SummaryTagWhereUniqueInputSchema } from '../inputTypeSchemas/SummaryTagWhereUniqueInputSchema'
import { SummaryArgsSchema } from "../outputTypeSchemas/SummaryArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SummaryTagSelectSchema: z.ZodType<Prisma.SummaryTagSelect> = z.object({
  summaryId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  summary: z.union([z.boolean(),z.lazy(() => SummaryArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()

export const SummaryTagUpdateArgsSchema: z.ZodType<Prisma.SummaryTagUpdateArgs> = z.object({
  select: SummaryTagSelectSchema.optional(),
  include: SummaryTagIncludeSchema.optional(),
  data: z.union([ SummaryTagUpdateInputSchema,SummaryTagUncheckedUpdateInputSchema ]),
  where: SummaryTagWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.SummaryTagUpdateArgs>;

export default SummaryTagUpdateArgsSchema;
