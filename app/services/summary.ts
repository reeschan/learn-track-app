import { LogRequestResponse } from "app/decorators/logDecorator";
import { openaiCreateSummary } from "app/lib/external/openai";
import { prisma } from "app/lib/prisma";
import {
  CreateSummaryRequest,
  CreateSummaryResponse,
  CompleteSummaryRequest,
  Summary,
} from "app/lib/types";

// サマリー作成サービスクラス
export class SummaryService {
  @LogRequestResponse
  async createSummary(
    createSummaryRequest: CreateSummaryRequest
  ): Promise<CreateSummaryResponse> {
    // OpenAIを使用してコンテンツを解析
    const aiResponse = await openaiCreateSummary(
      createSummaryRequest.title,
      createSummaryRequest.content
    );

    return {
      ...createSummaryRequest,
      ...aiResponse,
    };
  }

  @LogRequestResponse
  async completeSummary(
    completeSummaryRequest: CompleteSummaryRequest
  ): Promise<Summary> {
    const summary = await prisma.summary.create({
      data: {
        userId: "dd84e0e5-3134-4758-b53d-d4656834014b",
        title: completeSummaryRequest.title,
        content: completeSummaryRequest.content,
        summary: completeSummaryRequest.summary,
        tags: {
          create: completeSummaryRequest.tags.map((tagName) => ({
            tag: {
              create: { name: tagName },
            },
          })),
        },
        categories: {
          create: completeSummaryRequest.categories.map((categoryName) => ({
            category: {
              create: { name: categoryName },
            },
          })),
        },
      },
    });

    const response: Summary = {
      ...summary,
      tags: completeSummaryRequest.tags,
      categories: completeSummaryRequest.categories,
    };

    return response;
  }
}
