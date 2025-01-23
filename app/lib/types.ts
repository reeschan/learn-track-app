export type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  lastLogin?: Date;
};

export type CreateSummaryRequest = {
  title: string;
  content: string;
};

export type OpenAICreateSummaryResponse = {
  summary: string;
  tags: string[];
  categories: string[];
};

export type CreateSummaryResponse = CreateSummaryRequest &
  OpenAICreateSummaryResponse;

export type CompleteSummaryRequest = CreateSummaryRequest &
  OpenAICreateSummaryResponse;

export type Summary = {
  id: string;
  title: string;
  content: string;
  summary: string;
  categories: string[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
};
