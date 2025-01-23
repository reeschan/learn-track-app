import { z } from 'zod';
import type { Prisma } from '../..';
import { TagCreateManyInputSchema } from '../inputTypeSchemas/TagCreateManyInputSchema'

export const TagCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TagCreateManyAndReturnArgs> = z.object({
  data: z.union([ TagCreateManyInputSchema,TagCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.TagCreateManyAndReturnArgs>;

export default TagCreateManyAndReturnArgsSchema;
