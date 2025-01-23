import { z } from 'zod';
import type { Prisma } from '../..';
import { TagUpdateManyMutationInputSchema } from '../inputTypeSchemas/TagUpdateManyMutationInputSchema'
import { TagUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TagUncheckedUpdateManyInputSchema'
import { TagWhereInputSchema } from '../inputTypeSchemas/TagWhereInputSchema'

export const TagUpdateManyArgsSchema: z.ZodType<Prisma.TagUpdateManyArgs> = z.object({
  data: z.union([ TagUpdateManyMutationInputSchema,TagUncheckedUpdateManyInputSchema ]),
  where: TagWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.TagUpdateManyArgs>;

export default TagUpdateManyArgsSchema;
