import type { Prisma } from '../..';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { SummaryListRelationFilterSchema } from './SummaryListRelationFilterSchema';
import { ChatGPTHistoryListRelationFilterSchema } from './ChatGPTHistoryListRelationFilterSchema';

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  passwordHash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastLogin: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  summaries: z.lazy(() => SummaryListRelationFilterSchema).optional(),
  chatHistories: z.lazy(() => ChatGPTHistoryListRelationFilterSchema).optional()
}).strict() as z.ZodType<Prisma.UserWhereInput>;

export default UserWhereInputSchema;
