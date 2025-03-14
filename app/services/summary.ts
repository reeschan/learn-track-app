import { LogRequestResponse } from "app/decorators/logDecorator";
import {
  CompleteSummaryRequest,
  CreateSummaryRequest,
  CreateSummaryResponse,
  GetAllSummaryRequest,
  Summary,
} from "app/lib/types";
import { IOpenAIService } from "app/services/external/openai";
import { auth } from "auth";
import { PrismaClient } from "prisma/generated";

export interface ISummaryService {
  getAllsummary(getAllSummaryRequest: GetAllSummaryRequest): Promise<Summary[]>;
  createSummary(
    createSummaryRequest: CreateSummaryRequest
  ): Promise<CreateSummaryResponse>;
  completeSummary(
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
  async getAllsummary(
    getAllSummaryRequest: GetAllSummaryRequest
  ): Promise<Summary[]> {
    // summaryに紐づくcategoryとtagを取得
    // categoryとtagはnameだけ取得
    const summaries = await this.prisma.summary.findMany({
      where: {
        userId: getAllSummaryRequest.userId,
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

    return summaries.map((summary) => ({
      ...summary,
      categories: summary.categories.map((c) => c.category.name),
      tags: summary.tags.map((t) => t.tag.name),
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
    completeSummaryRequest: CompleteSummaryRequest
  ): Promise<Summary> {
    const session = await auth();
    const summary = await this.prisma.summary.create({
      data: {
        userId: session?.user?.id!,
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
