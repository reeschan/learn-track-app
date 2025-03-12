import { PrismaClient } from "prisma/generated";
export const prismaClient = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
  log: ["query", "info", "warn", "error"],
});
