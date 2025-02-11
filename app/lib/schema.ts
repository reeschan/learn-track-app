import { z } from "zod";

export const CreateSummarySchema = z.object({
  type: z.literal("create"),
  title: z.string().min(1),
  content: z.string().min(1),
});

export const CompleteSummarySchema = z.object({
  type: z.literal("complete"),
  title: z.string().min(1),
  content: z.string().min(1),
  summary: z.string().min(1),
});

export const SummarySchema = z.discriminatedUnion("type", [
  CreateSummarySchema,
  CompleteSummarySchema,
]);
