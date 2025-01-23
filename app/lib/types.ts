export type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  lastLogin?: Date;
};

export type Summary = {
  id: string;
  title: string;
  content: string;
  summary: string;
  categories: string[];
  tags: string[];
};
