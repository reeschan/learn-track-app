import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryArgsSchema } from "../outputTypeSchemas/SummaryArgsSchema"
import { CategoryArgsSchema } from "../outputTypeSchemas/CategoryArgsSchema"

export const SummaryCategoryIncludeSchema: z.ZodType<Prisma.SummaryCategoryInclude> = z.object({
  summary: z.union([z.boolean(),z.lazy(() => SummaryArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
}).strict()

export default SummaryCategoryIncludeSchema;
