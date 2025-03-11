import { PrismaClient } from "@prisma/client";

export interface IPrismaClient extends PrismaClient {}

export const prisma: IPrismaClient = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
  log: ["query", "info", "warn", "error"],
});
