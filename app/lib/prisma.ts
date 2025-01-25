import { PrismaClient } from "prisma/generated";

export const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
  log: ["query", "info", "warn", "error"],
});
