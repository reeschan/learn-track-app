import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SummaryOrderByWithRelationInputSchema } from './SummaryOrderByWithRelationInputSchema';
import { CategoryOrderByWithRelationInputSchema } from './CategoryOrderByWithRelationInputSchema';

export const SummaryCategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.SummaryCategoryOrderByWithRelationInput> = z.object({
  summaryId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  summary: z.lazy(() => SummaryOrderByWithRelationInputSchema).optional(),
  category: z.lazy(() => CategoryOrderByWithRelationInputSchema).optional()
}).strict() as z.ZodType<Prisma.SummaryCategoryOrderByWithRelationInput>;

export default SummaryCategoryOrderByWithRelationInputSchema;
