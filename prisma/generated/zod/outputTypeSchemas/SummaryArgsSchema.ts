import { z } from 'zod';
import type { Prisma } from '../..';
import { SummarySelectSchema } from '../inputTypeSchemas/SummarySelectSchema';
import { SummaryIncludeSchema } from '../inputTypeSchemas/SummaryIncludeSchema';

export const SummaryArgsSchema: z.ZodType<Prisma.SummaryDefaultArgs> = z.object({
  select: z.lazy(() => SummarySelectSchema).optional(),
  include: z.lazy(() => SummaryIncludeSchema).optional(),
}).strict();

export default SummaryArgsSchema;
