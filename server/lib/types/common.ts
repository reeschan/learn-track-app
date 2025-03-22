export type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  lastLogin?: Date;
};

export type Item = {
  text: string;
  color: string;
};

export type Message = string | null;

export type ZodErrors<T extends Record<string, any>> =
  | {
      [K in keyof T]?: string[];
    }
  | null;

export type RequestState<T> = T & {
  zodErrors: ZodErrors<any> | null;
  handleErrors: string[] | null;
  message: Message;
};
