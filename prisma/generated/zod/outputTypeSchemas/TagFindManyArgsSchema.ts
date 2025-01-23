import { z } from 'zod';
import type { Prisma } from '../..';
import { TagIncludeSchema } from '../inputTypeSchemas/TagIncludeSchema'
import { TagWhereInputSchema } from '../inputTypeSchemas/TagWhereInputSchema'
import { TagOrderByWithRelationInputSchema } from '../inputTypeSchemas/TagOrderByWithRelationInputSchema'
import { TagWhereUniqueInputSchema } from '../inputTypeSchemas/TagWhereUniqueInputSchema'
import { TagScalarFieldEnumSchema } from '../inputTypeSchemas/TagScalarFieldEnumSchema'
import { SummaryTagFindManyArgsSchema } from "../outputTypeSchemas/SummaryTagFindManyArgsSchema"
import { TagCountOutputTypeArgsSchema } from "../outputTypeSchemas/TagCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TagSelectSchema: z.ZodType<Prisma.TagSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  summaryTags: z.union([z.boolean(),z.lazy(() => SummaryTagFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TagFindManyArgsSchema: z.ZodType<Prisma.TagFindManyArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TagScalarFieldEnumSchema,TagScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.TagFindManyArgs>;

export default TagFindManyArgsSchema;
