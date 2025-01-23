import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryTagFindManyArgsSchema } from "../outputTypeSchemas/SummaryTagFindManyArgsSchema"
import { TagCountOutputTypeArgsSchema } from "../outputTypeSchemas/TagCountOutputTypeArgsSchema"

export const TagIncludeSchema: z.ZodType<Prisma.TagInclude> = z.object({
  summaryTags: z.union([z.boolean(),z.lazy(() => SummaryTagFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TagIncludeSchema;
