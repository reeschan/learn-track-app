import { z } from 'zod';
import type { Prisma } from '../..';
import { TagWhereInputSchema } from '../inputTypeSchemas/TagWhereInputSchema'
import { TagOrderByWithRelationInputSchema } from '../inputTypeSchemas/TagOrderByWithRelationInputSchema'
import { TagWhereUniqueInputSchema } from '../inputTypeSchemas/TagWhereUniqueInputSchema'

export const TagAggregateArgsSchema: z.ZodType<Prisma.TagAggregateArgs> = z.object({
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.TagAggregateArgs>;

export default TagAggregateArgsSchema;
