import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { OpenAICreateSummaryResponse } from "server/libs/types/summary";
import { z } from "zod";

export interface IOpenAIService {
  createSummary(
    title: string,
    content: string
  ): Promise<OpenAICreateSummaryResponse>;
}

const openAISummarySchema = z.object({
  summary: z.string(),
  tags: z.array(z.string()),
  categories: z.array(z.string()),
});

export class OpenAIService implements IOpenAIService {
  async createSummary(
    title: string,
    content: string
  ): Promise<OpenAICreateSummaryResponse> {
    console.log(`要約するタイトル：${title} コンテンツ：${content}`);

    const response = await generateObject({
      model: openai.responses("o1"),
      schema: openAISummarySchema,
      system:
        "あなたは高度な文章要約を行うAIアシスタントです。入力された文章を要約し、タグ付け、カテゴライズを行います。必ず指定された形式で出力してください。",
      prompt:
        `以下のタイトルとコンテンツを読み込んで要約してください:\n\nタイトル：${title}\nコンテンツ：${content}\n\n` +
        "以下の形式で厳密に出力してください。各行の先頭に「summary:」「tags:」「categories:」を付け、それ以外の文字は含めないでください。\n\n" +
        "summary:[ここに要約を記入]\n" +
        "tags:[タグ1],[タグ2],[タグ3]\n" +
        "categories:[カテゴリ1],[カテゴリ2],[カテゴリ3]\n\n" +
        "要約のルール:\n" +
        "1. 要約は簡潔かつ要点が明確になるようにしてください\n" +
        "2. タグは文章の内容を端的に表すキーワードを複数選んでください\n" +
        "3. カテゴリは文章が属する分野（例: テクノロジー, ビジネス, 健康など）を選んでください\n" +
        "4. 要約ができない場合は「summary:null」と出力してください\n" +
        "5. 出力は日本語で行ってください（特定の固有名詞を除く）\n" +
        "6. 指定された形式以外の文字は含めないでください",
    });

    if (response.finishReason !== "stop") {
      throw new Error("要約ができませんでした。");
    }

    console.log(response.object);

    return response.object;
  }
}
