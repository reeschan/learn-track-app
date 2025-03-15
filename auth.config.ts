import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { prisma } from "server/lib/prisma";

export const authConfig = {
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  providers: [Google, Github],
} satisfies NextAuthConfig;
