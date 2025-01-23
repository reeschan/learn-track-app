import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryIncludeSchema } from '../inputTypeSchemas/SummaryIncludeSchema'
import { SummaryWhereUniqueInputSchema } from '../inputTypeSchemas/SummaryWhereUniqueInputSchema'
import { SummaryCreateInputSchema } from '../inputTypeSchemas/SummaryCreateInputSchema'
import { SummaryUncheckedCreateInputSchema } from '../inputTypeSchemas/SummaryUncheckedCreateInputSchema'
import { SummaryUpdateInputSchema } from '../inputTypeSchemas/SummaryUpdateInputSchema'
import { SummaryUncheckedUpdateInputSchema } from '../inputTypeSchemas/SummaryUncheckedUpdateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { SummaryTagFindManyArgsSchema } from "../outputTypeSchemas/SummaryTagFindManyArgsSchema"
import { SummaryCategoryFindManyArgsSchema } from "../outputTypeSchemas/SummaryCategoryFindManyArgsSchema"
import { SummaryCountOutputTypeArgsSchema } from "../outputTypeSchemas/SummaryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SummarySelectSchema: z.ZodType<Prisma.SummarySelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  summary: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => SummaryTagFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => SummaryCategoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SummaryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SummaryUpsertArgsSchema: z.ZodType<Prisma.SummaryUpsertArgs> = z.object({
  select: SummarySelectSchema.optional(),
  include: SummaryIncludeSchema.optional(),
  where: SummaryWhereUniqueInputSchema,
  create: z.union([ SummaryCreateInputSchema,SummaryUncheckedCreateInputSchema ]),
  update: z.union([ SummaryUpdateInputSchema,SummaryUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.SummaryUpsertArgs>;

export default SummaryUpsertArgsSchema;
