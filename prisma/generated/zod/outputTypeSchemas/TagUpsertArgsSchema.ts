import { z } from 'zod';
import type { Prisma } from '../..';
import { TagIncludeSchema } from '../inputTypeSchemas/TagIncludeSchema'
import { TagWhereUniqueInputSchema } from '../inputTypeSchemas/TagWhereUniqueInputSchema'
import { TagCreateInputSchema } from '../inputTypeSchemas/TagCreateInputSchema'
import { TagUncheckedCreateInputSchema } from '../inputTypeSchemas/TagUncheckedCreateInputSchema'
import { TagUpdateInputSchema } from '../inputTypeSchemas/TagUpdateInputSchema'
import { TagUncheckedUpdateInputSchema } from '../inputTypeSchemas/TagUncheckedUpdateInputSchema'
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

export const TagUpsertArgsSchema: z.ZodType<Prisma.TagUpsertArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
  create: z.union([ TagCreateInputSchema,TagUncheckedCreateInputSchema ]),
  update: z.union([ TagUpdateInputSchema,TagUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.TagUpsertArgs>;

export default TagUpsertArgsSchema;
