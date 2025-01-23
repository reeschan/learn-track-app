import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SummaryOrderByWithRelationInputSchema } from './SummaryOrderByWithRelationInputSchema';
import { TagOrderByWithRelationInputSchema } from './TagOrderByWithRelationInputSchema';

export const SummaryTagOrderByWithRelationInputSchema: z.ZodType<Prisma.SummaryTagOrderByWithRelationInput> = z.object({
  summaryId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  summary: z.lazy(() => SummaryOrderByWithRelationInputSchema).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryTagOrderByWithRelationInput>;

export default SummaryTagOrderByWithRelationInputSchema;
