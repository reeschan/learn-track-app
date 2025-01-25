"use server";

import {
  CompleteSummaryRequest,
  CreateSummaryRequest,
  CreateSummaryResponse,
  Summary,
} from "app/lib/types";
import { SummaryService } from "app/services/summary";
import { z } from "zod";

const CreateSummarySchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

const CompleteSummarySchema = CreateSummarySchema.extend({
  summary: z.string().min(1),
  tags: z.array(z.string()).min(1),
  categories: z.array(z.string()).min(1),
});

const summaryService = new SummaryService();

export const createSummary = async (
  createSummaryRequest: CreateSummaryRequest
): Promise<CreateSummaryResponse> => {
  const validatedFields = CreateSummarySchema.safeParse({
    title: createSummaryRequest.title,
    content: createSummaryRequest.content,
  });

  if (!validatedFields.success) {
    throw new Error("Validation failed");
  }
  return summaryService.createSummary(createSummaryRequest);
};

export const completeSummary = async (
  completeSummaryRequest: CompleteSummaryRequest
): Promise<Summary> => {
  const validatedFields = CompleteSummarySchema.safeParse({
    ...completeSummaryRequest,
  });

  if (!validatedFields.success) {
    throw new Error("Validation failed");
  }
  return summaryService.completeSummary(completeSummaryRequest);
};
