import OpenAI from "openai";
import { OpenAICreateSummaryResponse } from "../lib/types";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const openaiCreateSummary = async (
  title: string,
  content: string
): Promise<OpenAICreateSummaryResponse> => {
  console.log(`要約するタイトル：${title} コンテンツ：${content}`);

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `あなたはコンテンツを要約するためのアプリです。\n
        読み込んだ文章を要約してタグ付け、カテゴライズを実施してください。\n
        出力フォーマットは 要約、タグ、カテゴリー として、それぞれ1行ずつ出力してください。
        タグとカテゴリーはカンマ区切りで出力してください。
        `,
      },
      {
        role: "user",
        content: `タイトルとコンテンツを読み込んで、要約を作成してください。: タイトル：${title} コンテンツ：${content}`,
      },
    ],
  });

  const lines = response.choices[0].message.content?.split("\n");

  if (!lines) {
    throw new Error("AI response is empty");
  }

  console.log(`要約結果：${response.choices[0].message.content}`);

  return {
    summary: lines[0] || "",
    tags: lines[1]?.split(",").map((tag) => tag.trim()) || [],
    categories: lines[2]?.split(",").map((category) => category.trim()) || [],
  };
};
