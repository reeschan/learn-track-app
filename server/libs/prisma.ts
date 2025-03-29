import { PrismaClient } from "@prisma/client";

// グローバル変数を使わない実装
const prismaGlobal = global as unknown as { prisma: PrismaClient | undefined };
export const prisma =
  prismaGlobal.prisma ||
  new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });

if (process.env.NODE_ENV !== "production") {
  prismaGlobal.prisma = prisma;
}
