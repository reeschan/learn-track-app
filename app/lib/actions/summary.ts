"use server";
import {
  CompleteSummaryRequest,
  CompleteSummaryResponse,
  CreateSummaryRequest,
  SummaryState,
} from "app/lib/types";
import { SummaryService } from "app/services/summary";

const summaryService = new SummaryService();

export const createSummary = async (
  payload: CreateSummaryRequest
): Promise<SummaryState> => {
  const response = await summaryService.createSummary(payload);

  return {
    ...payload,
    summary: response.summary,
    tags: Array.from(new Set(payload.tags.concat(response.tags))),
    categories: Array.from(
      new Set(payload.categories.concat(response.categories))
    ),
    handleErrors: null,
    message: "",
  };
};

export const completeSummary = async (
  payload: CompleteSummaryRequest
): Promise<CompleteSummaryResponse> => {
  const response = await summaryService.completeSummary(payload);

  return {
    ...response,
    handleErrors: null,
    message: "",
  };
};
