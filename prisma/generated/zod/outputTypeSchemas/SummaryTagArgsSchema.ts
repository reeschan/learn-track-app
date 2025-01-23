import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryTagSelectSchema } from '../inputTypeSchemas/SummaryTagSelectSchema';
import { SummaryTagIncludeSchema } from '../inputTypeSchemas/SummaryTagIncludeSchema';

export const SummaryTagArgsSchema: z.ZodType<Prisma.SummaryTagDefaultArgs> = z.object({
  select: z.lazy(() => SummaryTagSelectSchema).optional(),
  include: z.lazy(() => SummaryTagIncludeSchema).optional(),
}).strict();

export default SummaryTagArgsSchema;
