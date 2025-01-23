import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryArgsSchema } from "../outputTypeSchemas/SummaryArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"

export const SummaryTagSelectSchema: z.ZodType<Prisma.SummaryTagSelect> = z.object({
  summaryId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  summary: z.union([z.boolean(),z.lazy(() => SummaryArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
}).strict()

export default SummaryTagSelectSchema;
