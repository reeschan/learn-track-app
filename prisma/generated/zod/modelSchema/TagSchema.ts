import { z } from 'zod';

/////////////////////////////////////////
// TAG SCHEMA
/////////////////////////////////////////

export const TagSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.coerce.date(),
})

export type Tag = z.infer<typeof TagSchema>

export default TagSchema;
