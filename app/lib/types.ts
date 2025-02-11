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
  tags: string[];
  categories: string[];
};

export type OpenAICreateSummaryResponse = {
  summary: string;
  tags: string[];
  categories: string[];
};

export type CreateSummaryResponse = CreateSummaryRequest &
  OpenAICreateSummaryResponse;

export type CompleteSummaryRequest = CreateSummaryRequest & {
  summary: string;
};

export type CompleteSummaryResponse = SummaryState & {
  id: string;
};

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

export type SummaryErrors = string[] | null;
export type SummaryZodErrors = {
  title?: string[];
  content?: string[];
  summary?: string[];
} | null;

export type Message = string | null;

type RequestState<T> = T & {
  handleErrors: SummaryErrors;
  message: Message;
};

export type SummaryState = RequestState<CompleteSummaryRequest>;
