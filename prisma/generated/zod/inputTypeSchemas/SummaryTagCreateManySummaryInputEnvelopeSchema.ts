import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagCreateManySummaryInputSchema } from './SummaryTagCreateManySummaryInputSchema';

export const SummaryTagCreateManySummaryInputEnvelopeSchema: z.ZodType<Prisma.SummaryTagCreateManySummaryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SummaryTagCreateManySummaryInputSchema),z.lazy(() => SummaryTagCreateManySummaryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.SummaryTagCreateManySummaryInputEnvelope>;

export default SummaryTagCreateManySummaryInputEnvelopeSchema;
