import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryCountOutputTypeSelectSchema } from './SummaryCountOutputTypeSelectSchema';

export const SummaryCountOutputTypeArgsSchema: z.ZodType<Prisma.SummaryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SummaryCountOutputTypeSelectSchema).nullish(),
}).strict();

export default SummaryCountOutputTypeSelectSchema;
