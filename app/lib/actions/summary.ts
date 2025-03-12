"use server";
import {
  CompleteSummaryRequest,
  CompleteSummaryResponse,
  CreateSummaryRequest,
  GetAllSummaryRequest,
  GetAllSummaryState,
  SummaryState,
} from "app/lib/types";
import { SummaryService } from "app/services/summary";
import { prismaClient } from "app/lib/prisma";
import { OpenAIService } from "app/services/external/openai";

const summaryService = new SummaryService(prismaClient, new OpenAIService());

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

export const getAllSummary = async (
  payload: GetAllSummaryRequest
): Promise<GetAllSummaryState> => {
  const response = await summaryService.getAllsummary(payload);

  return {
    summaries: response,
    handleErrors: null,
    message: "",
  }
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
