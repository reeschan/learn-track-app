import { z } from 'zod';
import type { Prisma } from '../..';
import { SummaryCategoryWhereInputSchema } from '../inputTypeSchemas/SummaryCategoryWhereInputSchema'

export const SummaryCategoryDeleteManyArgsSchema: z.ZodType<Prisma.SummaryCategoryDeleteManyArgs> = z.object({
  where: SummaryCategoryWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.SummaryCategoryDeleteManyArgs>;

export default SummaryCategoryDeleteManyArgsSchema;
