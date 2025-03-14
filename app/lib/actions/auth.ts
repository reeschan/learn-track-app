"use server";

import { signIn } from "auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export async function handleCredentialsSignIn(formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      return redirect(`/signin?error=${error.type}`);
    }
    throw error;
  }
}

export async function handleProviderSignIn(
  providerId: string,
  callbackUrl = "",
) {
  try {
    await signIn(providerId, {
      redirectTo: callbackUrl,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return redirect(`/signin?error=${error.type}`);
    }
    throw error;
  }
}
