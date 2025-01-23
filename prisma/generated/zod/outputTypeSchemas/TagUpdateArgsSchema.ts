import { z } from 'zod';
import type { Prisma } from '../..';
import { TagIncludeSchema } from '../inputTypeSchemas/TagIncludeSchema'
import { TagUpdateInputSchema } from '../inputTypeSchemas/TagUpdateInputSchema'
import { TagUncheckedUpdateInputSchema } from '../inputTypeSchemas/TagUncheckedUpdateInputSchema'
import { TagWhereUniqueInputSchema } from '../inputTypeSchemas/TagWhereUniqueInputSchema'
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

export const TagUpdateArgsSchema: z.ZodType<Prisma.TagUpdateArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  data: z.union([ TagUpdateInputSchema,TagUncheckedUpdateInputSchema ]),
  where: TagWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.TagUpdateArgs>;

export default TagUpdateArgsSchema;
