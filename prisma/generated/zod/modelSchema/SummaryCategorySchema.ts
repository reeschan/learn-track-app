import { z } from 'zod';

/////////////////////////////////////////
// SUMMARY CATEGORY SCHEMA
/////////////////////////////////////////

export const SummaryCategorySchema = z.object({
  summaryId: z.string(),
  categoryId: z.string(),
  createdAt: z.coerce.date(),
})

export type SummaryCategory = z.infer<typeof SummaryCategorySchema>

export default SummaryCategorySchema;
