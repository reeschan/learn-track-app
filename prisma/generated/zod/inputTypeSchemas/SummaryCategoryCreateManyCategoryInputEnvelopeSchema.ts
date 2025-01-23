import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryCategoryCreateManyCategoryInputSchema } from './SummaryCategoryCreateManyCategoryInputSchema';

export const SummaryCategoryCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.SummaryCategoryCreateManyCategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SummaryCategoryCreateManyCategoryInputSchema),z.lazy(() => SummaryCategoryCreateManyCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryCreateManyCategoryInputEnvelope>;

export default SummaryCategoryCreateManyCategoryInputEnvelopeSchema;
