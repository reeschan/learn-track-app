import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryTagIncludeSchema } from '../inputTypeSchemas/SummaryTagIncludeSchema'
import { SummaryTagWhereUniqueInputSchema } from '../inputTypeSchemas/SummaryTagWhereUniqueInputSchema'
import { SummaryTagCreateInputSchema } from '../inputTypeSchemas/SummaryTagCreateInputSchema'
import { SummaryTagUncheckedCreateInputSchema } from '../inputTypeSchemas/SummaryTagUncheckedCreateInputSchema'
import { SummaryTagUpdateInputSchema } from '../inputTypeSchemas/SummaryTagUpdateInputSchema'
import { SummaryTagUncheckedUpdateInputSchema } from '../inputTypeSchemas/SummaryTagUncheckedUpdateInputSchema'
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

export const SummaryTagUpsertArgsSchema: z.ZodType<Prisma.SummaryTagUpsertArgs> = z.object({
  select: SummaryTagSelectSchema.optional(),
  include: SummaryTagIncludeSchema.optional(),
  where: SummaryTagWhereUniqueInputSchema,
  create: z.union([ SummaryTagCreateInputSchema,SummaryTagUncheckedCreateInputSchema ]),
  update: z.union([ SummaryTagUpdateInputSchema,SummaryTagUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.SummaryTagUpsertArgs>;

export default SummaryTagUpsertArgsSchema;
