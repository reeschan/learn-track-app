import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryCreateManySummaryInputSchema } from './SummaryCategoryCreateManySummaryInputSchema';

export const SummaryCategoryCreateManySummaryInputEnvelopeSchema: z.ZodType<Prisma.SummaryCategoryCreateManySummaryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SummaryCategoryCreateManySummaryInputSchema),z.lazy(() => SummaryCategoryCreateManySummaryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryCreateManySummaryInputEnvelope>;

export default SummaryCategoryCreateManySummaryInputEnvelopeSchema;
