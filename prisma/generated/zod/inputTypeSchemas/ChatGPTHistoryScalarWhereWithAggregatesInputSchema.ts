import type { Prisma } from '../..';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ChatGPTHistoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ChatGPTHistoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ChatGPTHistoryScalarWhereWithAggregatesInputSchema),z.lazy(() => ChatGPTHistoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChatGPTHistoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChatGPTHistoryScalarWhereWithAggregatesInputSchema),z.lazy(() => ChatGPTHistoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  summary: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.ChatGPTHistoryScalarWhereWithAggregatesInput>;

export default ChatGPTHistoryScalarWhereWithAggregatesInputSchema;
