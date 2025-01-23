import { z } from 'zod';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  lastLogin: z.coerce.date().nullable(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema;
