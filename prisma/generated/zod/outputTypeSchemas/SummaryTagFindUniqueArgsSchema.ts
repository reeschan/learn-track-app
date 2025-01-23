import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryTagIncludeSchema } from '../inputTypeSchemas/SummaryTagIncludeSchema'
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

export const SummaryTagFindUniqueArgsSchema: z.ZodType<Prisma.SummaryTagFindUniqueArgs> = z.object({
  select: SummaryTagSelectSchema.optional(),
  include: SummaryTagIncludeSchema.optional(),
  where: SummaryTagWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.SummaryTagFindUniqueArgs>;

export default SummaryTagFindUniqueArgsSchema;
