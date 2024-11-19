export type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  lastLogin?: Date;
};
