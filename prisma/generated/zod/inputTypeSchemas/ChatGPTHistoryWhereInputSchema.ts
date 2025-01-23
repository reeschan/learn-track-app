import type { Prisma } from '../..';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const ChatGPTHistoryWhereInputSchema: z.ZodType<Prisma.ChatGPTHistoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChatGPTHistoryWhereInputSchema),z.lazy(() => ChatGPTHistoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChatGPTHistoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChatGPTHistoryWhereInputSchema),z.lazy(() => ChatGPTHistoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  summary: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.ChatGPTHistoryWhereInput>;

export default ChatGPTHistoryWhereInputSchema;
