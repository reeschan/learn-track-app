import { z } from 'zod';
import type { Prisma } from '../..';
import { UserUpdateManyMutationInputSchema } from '../inputTypeSchemas/UserUpdateManyMutationInputSchema'
import { UserUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/UserUncheckedUpdateManyInputSchema'
import { UserWhereInputSchema } from '../inputTypeSchemas/UserWhereInputSchema'

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.UserUpdateManyArgs>;

export default UserUpdateManyArgsSchema;
