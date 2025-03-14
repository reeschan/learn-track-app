import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "app/lib/prisma";
import { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const authConfig = {
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isTopPage = nextUrl.pathname === "/";
      if (isLoggedIn && isTopPage) {
        return Response.redirect(new URL("/summary", nextUrl));
      }
      if (!isLoggedIn) {
        return false;
      }
      return true;
    },
  },
  providers: [Google, Github],
} satisfies NextAuthConfig;
