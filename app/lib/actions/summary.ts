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
import { prisma } from "app/lib/prisma";
import { OpenAIService } from "app/services/external/openai";
import { auth } from "auth";

const summaryService = new SummaryService(prisma, new OpenAIService());

export const createSummary = async (
  payload: CreateSummaryRequest
): Promise<SummaryState> => {
  const response = await summaryService.createSummary(payload);
  const session = await auth();

  return {
    ...payload,
    userId: session?.user?.id!,
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
  const session = await auth();
  try {
    const response = await summaryService.completeSummary({
      ...payload,
      userId: session?.user?.id!,
    });

    return {
      ...response,
      userId: session?.user?.id!,
      handleErrors: null,
      message: "",
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
