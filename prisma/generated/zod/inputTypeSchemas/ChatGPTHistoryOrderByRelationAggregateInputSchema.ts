import type { Prisma } from '../..';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ChatGPTHistoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ChatGPTHistoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ChatGPTHistoryOrderByRelationAggregateInput>;

export default ChatGPTHistoryOrderByRelationAggregateInputSchema;
