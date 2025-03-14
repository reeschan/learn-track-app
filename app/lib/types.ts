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
  userId: string;
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

export type GetAllSummaryRequest = {
  userId: string;
};

export type RequestState = {
  handleErrors: SummaryErrors;
  message: Message;
};

export type GetAllSummaryState = {
  summaries: Summary[];
} & RequestState;

export type SummaryErrors = string[] | null;
export type SummaryZodErrors = {
  title?: string[];
  content?: string[];
  summary?: string[];
} | null;

export type Message = string | null;

export type SummaryState = CompleteSummaryRequest & RequestState;

export type Item = {
  text: string;
  color: string;
};
