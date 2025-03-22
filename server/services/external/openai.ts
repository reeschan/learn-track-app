import OpenAI from "openai";
import { OpenAICreateSummaryResponse } from "server/lib/types/summary";

export interface IOpenAIService {
  createSummary(
    title: string,
    content: string
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
    content: string
  ): Promise<OpenAICreateSummaryResponse> {
    console.log(`要約するタイトル：${title} コンテンツ：${content}`);

    const response = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "あなたは高度な文章要約を行うAIアシスタントです。入力された文章を要約し、タグ付け、カテゴライズを行います。必ず指定された形式で出力してください。",
        },
        {
          role: "user",
          content:
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
        },
      ],
      temperature: 0.3,
    });

    const message = response.choices[0].message.content?.trim() || "";

    const summaryMatch = message.match(/summary:(.*?)(?=\ntags:|$)/s);
    const tagsMatch = message.match(/tags:(.*?)(?=\ncategories:|$)/s);
    const categoriesMatch = message.match(/categories:(.*?)(?=\n|$)/s);

    const summary = summaryMatch ? summaryMatch[1].trim() : "";

    if (summary === "null") {
      throw new Error("要約ができませんでした。");
    }

    const tags = tagsMatch
      ? tagsMatch[1]
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag)
      : [];

    const categories = categoriesMatch
      ? categoriesMatch[1]
          .split(",")
          .map((category) => category.trim())
          .filter((category) => category)
      : [];

    console.log(
      `要約結果: summary=${summary}, tags=${tags}, categories=${categories}`
    );

    return {
      summary,
      tags,
      categories,
    };
  }
}
