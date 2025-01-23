import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryIncludeSchema } from '../inputTypeSchemas/SummaryIncludeSchema'
import { SummaryWhereInputSchema } from '../inputTypeSchemas/SummaryWhereInputSchema'
import { SummaryOrderByWithRelationInputSchema } from '../inputTypeSchemas/SummaryOrderByWithRelationInputSchema'
import { SummaryWhereUniqueInputSchema } from '../inputTypeSchemas/SummaryWhereUniqueInputSchema'
import { SummaryScalarFieldEnumSchema } from '../inputTypeSchemas/SummaryScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { SummaryTagFindManyArgsSchema } from "../outputTypeSchemas/SummaryTagFindManyArgsSchema"
import { SummaryCategoryFindManyArgsSchema } from "../outputTypeSchemas/SummaryCategoryFindManyArgsSchema"
import { SummaryCountOutputTypeArgsSchema } from "../outputTypeSchemas/SummaryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SummarySelectSchema: z.ZodType<Prisma.SummarySelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  summary: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => SummaryTagFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => SummaryCategoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SummaryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SummaryFindFirstArgsSchema: z.ZodType<Prisma.SummaryFindFirstArgs> = z.object({
  select: SummarySelectSchema.optional(),
  include: SummaryIncludeSchema.optional(),
  where: SummaryWhereInputSchema.optional(),
  orderBy: z.union([ SummaryOrderByWithRelationInputSchema.array(),SummaryOrderByWithRelationInputSchema ]).optional(),
  cursor: SummaryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SummaryScalarFieldEnumSchema,SummaryScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.SummaryFindFirstArgs>;

export default SummaryFindFirstArgsSchema;
