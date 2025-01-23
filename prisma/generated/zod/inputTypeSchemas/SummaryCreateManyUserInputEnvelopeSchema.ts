import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCreateManyUserInputSchema } from './SummaryCreateManyUserInputSchema';

export const SummaryCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SummaryCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SummaryCreateManyUserInputSchema),z.lazy(() => SummaryCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.SummaryCreateManyUserInputEnvelope>;

export default SummaryCreateManyUserInputEnvelopeSchema;
