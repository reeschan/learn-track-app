import { createFieldMap } from "server/lib/util";

// ============================================================
// サマリーのデータモデル
// ============================================================

import { RequestState, ZodErrors } from "server/lib/types/common";

// 基本となるサマリーモデル
export interface Summary {
  id: string;
  title: string;
  content: string;
  summary: string;
  categories: string[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

// サマリーのフィールド項目の型の文字数リテラルマップ
export const SummaryFieldMap = createFieldMap<Summary>();

// ============================================================
// 共通の型定義
// ============================================================

// ユーザーが入力する基本情報
export type SummaryUserInput = Pick<Summary, "title" | "content">;

// AIが生成する情報
export type SummaryAIGenerated = Pick<
  Summary,
  "summary" | "tags" | "categories"
>;

// システムが管理するメタデータ
export type SummaryMetadata = Pick<Summary, "id" | "createdAt" | "updatedAt">;

// 完全なサマリー情報（メタデータなし）
export type SummaryContent = Omit<Summary, keyof SummaryMetadata>;

// ============================================================
// API リクエスト/レスポンス型
// ============================================================

// サマリー作成時のユーザー入力（タグとカテゴリはオプション）
export interface SummaryProps extends SummaryUserInput {
  tags: string[];
  categories: string[];
  summary: string;
}

// サマリー作成時の必須入力
export type CreateSummaryRequest = Required<SummaryUserInput>;

// OpenAIからの応答
export type OpenAICreateSummaryResponse = SummaryAIGenerated;

// サマリー作成APIのレスポンス
export type CreateSummaryResponse = SummaryContent;

// サマリー完成時の入力データ
export type CompleteSummaryRequest = SummaryContent;

// サマリー完成APIのレスポンス
export type CompleteSummaryResponse = Pick<Summary, "id">;

// 全サマリー取得リクエスト
export type GetAllSummaryRequest = {
  userId: string;
};

// ============================================================
// 状態管理型
// ============================================================

// バリデーションエラー用の型
export type SummaryZodErrors = ZodErrors<
  Pick<Summary, "title" | "content" | "summary">
>;

// 全サマリー取得状態
export type GetAllSummaryState = Omit<
  RequestState<{
    summaries: Summary[];
  }>,
  "zodErrors"
>;

// サマリー作成状態
export type SummaryState = RequestState<SummaryProps>;
