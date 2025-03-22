"use server";
import { getUserId } from "server/lib/auth";
import { prisma } from "server/lib/prisma";
import { CompleteSummarySchema, CreateSummarySchema } from "server/lib/schema";
import {
  CompleteSummaryRequest,
  CreateSummaryRequest,
  GetAllSummaryState,
  SummaryFieldMap,
  SummaryState,
} from "server/lib/types/summary";
import { OpenAIService } from "server/services/external/openai";
import { SummaryService } from "server/services/summary";

const summaryService = new SummaryService(prisma, new OpenAIService());

export const createSummary = async (
  prevState: SummaryState,
  formData: FormData
): Promise<SummaryState> => {
  const validatedFields = CreateSummarySchema.safeParse({
    title: formData.get(SummaryFieldMap.title),
    content: formData.get(SummaryFieldMap.content),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      handleErrors: null,
      message: "",
    };
  }

  try {
    const request: CreateSummaryRequest = {
      title: validatedFields.data.title,
      content: validatedFields.data.content,
    };

    const response = await summaryService.createSummary(request);

    return {
      title: response.title,
      content: response.content,
      summary: response.summary,
      tags: Array.from(new Set(prevState?.tags?.concat(response.tags))),
      categories: Array.from(
        new Set(prevState?.categories?.concat(response.categories))
      ),
      zodErrors: null,
      handleErrors: null,
      message: "",
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllSummary = async (): Promise<GetAllSummaryState> => {
  const userId = await getUserId();
  if (!userId) {
    return {
      summaries: [],
      handleErrors: ["Unauthorized"],
      message: "Unauthorized",
    };
  }

  try {
    const response = await summaryService.getAllsummary(userId);

    return {
      summaries: response,
      handleErrors: null,
      message: "",
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const completeSummary = async (
  prevState: SummaryState,
  formData: FormData
): Promise<SummaryState> => {
  const validatedFields = CompleteSummarySchema.safeParse({
    title: formData.get(SummaryFieldMap.title),
    content: formData.get(SummaryFieldMap.content),
    summary: formData.get(SummaryFieldMap.summary),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      handleErrors: null,
      message: "",
    };
  }

  const userId = await getUserId();
  if (!userId) {
    return {
      ...prevState,
      handleErrors: ["Unauthorized"],
      message: "Unauthorized",
    };
  }

  try {
    const request: CompleteSummaryRequest = {
      title: validatedFields.data.title,
      content: validatedFields.data.content,
      summary: validatedFields.data.summary,
      tags: prevState.tags,
      categories: prevState.categories,
    };

    const response = await summaryService.completeSummary(userId, request);

    return {
      ...prevState,
      summary: response.summary,
      tags: Array.from(new Set(prevState?.tags?.concat(response.tags))),
      categories: Array.from(
        new Set(prevState?.categories?.concat(response.categories))
      ),
      handleErrors: null,
      message: "",
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
