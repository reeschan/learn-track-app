import type { Prisma } from '../..';

import { z } from 'zod';

export const TagCreateManyInputSchema: z.ZodType<Prisma.TagCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.TagCreateManyInput>;

export default TagCreateManyInputSchema;
