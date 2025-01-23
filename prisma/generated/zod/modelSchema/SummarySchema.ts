import { z } from 'zod';

/////////////////////////////////////////
// SUMMARY SCHEMA
/////////////////////////////////////////

export const SummarySchema = z.object({
  id: z.string(),
  userId: z.string(),
  title: z.string(),
  content: z.string(),
  summary: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Summary = z.infer<typeof SummarySchema>

export default SummarySchema;
