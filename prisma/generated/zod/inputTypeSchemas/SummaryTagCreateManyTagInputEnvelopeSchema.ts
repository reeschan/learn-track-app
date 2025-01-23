import type { Prisma } from '../..';

import { z } from 'zod';
import { SummaryTagCreateManyTagInputSchema } from './SummaryTagCreateManyTagInputSchema';

export const SummaryTagCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.SummaryTagCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SummaryTagCreateManyTagInputSchema),z.lazy(() => SummaryTagCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.SummaryTagCreateManyTagInputEnvelope>;

export default SummaryTagCreateManyTagInputEnvelopeSchema;
