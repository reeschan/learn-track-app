import { z } from 'zod';

/////////////////////////////////////////
// SUMMARY TAG SCHEMA
/////////////////////////////////////////

export const SummaryTagSchema = z.object({
  summaryId: z.string(),
  tagId: z.string(),
  createdAt: z.coerce.date(),
})

export type SummaryTag = z.infer<typeof SummaryTagSchema>

export default SummaryTagSchema;
