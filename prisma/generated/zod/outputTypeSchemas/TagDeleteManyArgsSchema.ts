import { z } from 'zod';
import type { Prisma } from '../..';
import { TagWhereInputSchema } from '../inputTypeSchemas/TagWhereInputSchema'

export const TagDeleteManyArgsSchema: z.ZodType<Prisma.TagDeleteManyArgs> = z.object({
  where: TagWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.TagDeleteManyArgs>;

export default TagDeleteManyArgsSchema;
