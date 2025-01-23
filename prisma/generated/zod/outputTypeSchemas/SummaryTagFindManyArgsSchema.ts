import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryTagIncludeSchema } from '../inputTypeSchemas/SummaryTagIncludeSchema'
import { SummaryTagWhereInputSchema } from '../inputTypeSchemas/SummaryTagWhereInputSchema'
import { SummaryTagOrderByWithRelationInputSchema } from '../inputTypeSchemas/SummaryTagOrderByWithRelationInputSchema'
import { SummaryTagWhereUniqueInputSchema } from '../inputTypeSchemas/SummaryTagWhereUniqueInputSchema'
import { SummaryTagScalarFieldEnumSchema } from '../inputTypeSchemas/SummaryTagScalarFieldEnumSchema'
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

export const SummaryTagFindManyArgsSchema: z.ZodType<Prisma.SummaryTagFindManyArgs> = z.object({
  select: SummaryTagSelectSchema.optional(),
  include: SummaryTagIncludeSchema.optional(),
  where: SummaryTagWhereInputSchema.optional(),
  orderBy: z.union([ SummaryTagOrderByWithRelationInputSchema.array(),SummaryTagOrderByWithRelationInputSchema ]).optional(),
  cursor: SummaryTagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SummaryTagScalarFieldEnumSchema,SummaryTagScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryTagFindManyArgs>;

export default SummaryTagFindManyArgsSchema;
