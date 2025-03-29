import { z } from "zod";

export const CreateSummarySchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export const CompleteSummarySchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  summary: z.string().min(1),
});
