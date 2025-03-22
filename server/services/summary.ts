import { PrismaClient } from "@prisma/client";
import { LogRequestResponse } from "server/lib/decorators/logDecorator";
import {
  CompleteSummaryRequest,
  CreateSummaryRequest,
  CreateSummaryResponse,
  Summary,
} from "server/lib/types/summary";
import { IOpenAIService } from "server/services/external/openai";

export interface ISummaryService {
  getAllsummary(userId: string): Promise<Summary[]>;
  createSummary(
    createSummaryRequest: CreateSummaryRequest
  ): Promise<CreateSummaryResponse>;
  completeSummary(
    userId: string,
    completeSummaryRequest: CompleteSummaryRequest
  ): Promise<Summary>;
}

// サマリー作成サービスクラス
export class SummaryService implements ISummaryService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly openaiService: IOpenAIService
  ) {}

  @LogRequestResponse
  async getAllsummary(userId: string): Promise<Summary[]> {
    // summaryに紐づくcategoryとtagを取得
    // categoryとtagはnameだけ取得
    const summaries = await this.prisma.summary.findMany({
      where: {
        userId: userId,
      },
      include: {
        categories: {
          select: {
            category: {
              select: {
                name: true,
              },
            },
          },
        },
        tags: {
          select: {
            tag: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    return summaries.map((summary: any) => ({
      ...summary,
      categories: summary.categories.map((c: any) => c.category.name),
      tags: summary.tags.map((t: any) => t.tag.name),
    }));
  }

  @LogRequestResponse
  async createSummary(
    createSummaryRequest: CreateSummaryRequest
  ): Promise<CreateSummaryResponse> {
    // OpenAIを使用してコンテンツを解析
    const aiResponse = await this.openaiService.createSummary(
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
    userId: string,
    completeSummaryRequest: CompleteSummaryRequest
  ): Promise<Summary> {
    const summary = await this.prisma.summary.create({
      data: {
        userId: userId,
        title: completeSummaryRequest.title,
        content: completeSummaryRequest.content,
        summary: completeSummaryRequest.summary,
        tags: {
          create: await Promise.all(
            completeSummaryRequest.tags.map(async (tagName) => ({
              tag: {
                connectOrCreate: {
                  where: { name: tagName },
                  create: { name: tagName },
                },
              },
            }))
          ),
        },
        categories: {
          create: await Promise.all(
            completeSummaryRequest.categories.map(async (categoryName) => ({
              category: {
                connectOrCreate: {
                  where: { name: categoryName },
                  create: { name: categoryName },
                },
              },
            }))
          ),
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
