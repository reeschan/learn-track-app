"use server";

import { auth } from "auth";
import { redirect } from "next/navigation";

export async function checkAuth() {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }
}

export async function getUserId() {
  await checkAuth();
  const session = await auth();
  return session?.user?.id;
}
