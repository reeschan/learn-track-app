import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryArgsSchema } from "../outputTypeSchemas/SummaryArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"

export const SummaryTagIncludeSchema: z.ZodType<Prisma.SummaryTagInclude> = z.object({
  summary: z.union([z.boolean(),z.lazy(() => SummaryArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()

export default SummaryTagIncludeSchema;
