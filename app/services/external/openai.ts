import { OpenAICreateSummaryResponse } from "app/lib/types";
import OpenAI from "openai";

export interface IOpenAIService {
  createSummary(
    title: string,
    content: string,
  ): Promise<OpenAICreateSummaryResponse>;
}

export class OpenAIService implements IOpenAIService {
  private readonly openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async createSummary(
    title: string,
    content: string,
  ): Promise<OpenAICreateSummaryResponse> {
    console.log(`要約するタイトル：${title} コンテンツ：${content}`);

    const response = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "あなたは高度な文章要約を行うAIアシスタントです。\n\
            入力された文章を以下の要件に従って要約し、タグ付け、カテゴライズを行ってください。\n\n\
            ",
        },
        {
          role: "user",
          content:
            `タイトルとコンテンツを読み込んで、詳細な要約を作成してください。: タイトル：${title} コンテンツ：${content}\n\n` +
            "## 要件\n\
            1. **要約**: 読み込んだ文章を簡潔に要約してください。要点が明確になるようにしてください。\n\
            2. **タグ**: 文章の内容を端的に表すキーワードを複数選び、カンマ(,)区切りで出力してください。\n\
            3. **カテゴリー**: 文章が属するカテゴリ（例: テクノロジー, ビジネス, 健康 など）を複数選び、カンマ(,)区切りで出力してください。\n\n\
            ## 出力フォーマット\n\
            ```\n\
              summary:<要約>\n\
              tags:<タグ,タグ,タグ>\n\
              categories:<カテゴリー,カテゴリー,カテゴリー>\n\
            ```\n\n\
            要約ができない場合は、summaryはnullを返してください。\n\
            **注意点**:\n\
            - タグとカテゴリーは、意味が明確になるように選択してください。\n\
            - 出力の大部分は日本語で記述してください（特定の固有名詞などを除く）。",
        },
      ],
    });

    const lines = response.choices[0].message.content?.split("\n");

    if (!lines) {
      throw new Error("AI response is empty");
    }

    const summary = lines[1]?.replace("summary:", "") || "";
    if (summary === " null" || summary === "null" || summary === "  null") {
      throw new Error("要約ができませんでした。");
    }

    console.log(`要約結果：${lines}`);

    return {
      summary,
      tags:
        lines[2]
          ?.replace("tags:", "")
          .split(",")
          .map((tag) => tag.trim()) || [],
      categories:
        lines[3]
          ?.replace("categories:", "")
          .split(",")
          .map((category) => category.trim()) || [],
    };
  }
}
