import { z } from 'zod';
import type { Prisma } from '../..';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { SummaryTagFindManyArgsSchema } from "../outputTypeSchemas/SummaryTagFindManyArgsSchema"
import { SummaryCategoryFindManyArgsSchema } from "../outputTypeSchemas/SummaryCategoryFindManyArgsSchema"
import { SummaryCountOutputTypeArgsSchema } from "../outputTypeSchemas/SummaryCountOutputTypeArgsSchema"

export const SummaryIncludeSchema: z.ZodType<Prisma.SummaryInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => SummaryTagFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => SummaryCategoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SummaryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default SummaryIncludeSchema;
