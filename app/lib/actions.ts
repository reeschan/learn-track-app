import {
  CompleteSummaryRequest,
  CreateSummaryRequest,
  CreateSummaryResponse,
  Summary,
} from "./types";
import { z } from "zod";
import { openaiCreateSummary } from "../ui/summary/create/services/openai";
import { prisma } from "@/middleware";

const CreateSummarySchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

const CompleteSummarySchema = CreateSummarySchema.extend({
  summary: z.string().min(1),
  tags: z.array(z.string()).min(1),
  categories: z.array(z.string()).min(1),
});

// リクエストとレスポンスをログに記録するデコレータ
function LogRequestResponse(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    console.log(`🟢 Request to ${propertyKey}:`, JSON.stringify(args));

    try {
      const result = await originalMethod.apply(this, args);
      console.log(`✅ Response from ${propertyKey}:`, JSON.stringify(result));
      return result;
    } catch (error) {
      console.error(`❌ Error in ${propertyKey}:`, error);
      throw error;
    }
  };

  return descriptor;
}

// サマリー作成サービスクラス
class SummaryService {
  @LogRequestResponse
  async createSummary(
    createSummaryRequest: CreateSummaryRequest
  ): Promise<CreateSummaryResponse> {
    const validatedFields = CreateSummarySchema.safeParse({
      title: createSummaryRequest.title,
      content: createSummaryRequest.content,
    });

    if (!validatedFields.success) {
      throw new Error("Validation failed");
    }

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
    const validatedFields = CompleteSummarySchema.safeParse({
      ...completeSummaryRequest,
    });

    if (!validatedFields.success) {
      throw new Error("Validation failed");
    }

    const summary = await prisma.summary.create({
      data: {
        userId: "1",
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

// インスタンス化して利用
const summaryService = new SummaryService();
export default summaryService;
