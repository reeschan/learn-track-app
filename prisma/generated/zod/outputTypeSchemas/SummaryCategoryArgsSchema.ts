import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryCategorySelectSchema } from '../inputTypeSchemas/SummaryCategorySelectSchema';
import { SummaryCategoryIncludeSchema } from '../inputTypeSchemas/SummaryCategoryIncludeSchema';

export const SummaryCategoryArgsSchema: z.ZodType<Prisma.SummaryCategoryDefaultArgs> = z.object({
  select: z.lazy(() => SummaryCategorySelectSchema).optional(),
  include: z.lazy(() => SummaryCategoryIncludeSchema).optional(),
}).strict();

export default SummaryCategoryArgsSchema;
