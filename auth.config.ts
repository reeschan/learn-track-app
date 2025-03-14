import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "app/lib/prisma";
const adapter = PrismaAdapter(prisma) 

export const authConfig = {
  adapter,
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
  providers: [
    Google,
    Github,
  ], 
} satisfies NextAuthConfig;
