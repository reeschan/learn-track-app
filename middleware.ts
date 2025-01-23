import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { PrismaClient } from "@prisma/client";
import { setZodErrorMap } from "./middleware/zod";

export default NextAuth(authConfig).auth;

export const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
  log: ["query", "info", "warn", "error"],
});

setZodErrorMap();

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
