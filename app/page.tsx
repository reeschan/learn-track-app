"use client";
import { Suspense } from "react";
import Loading from "app/ui/common/Loading";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    redirect("/signin");
  }
  return (
    <Suspense fallback={<Loading />}>
    </Suspense>
  );
}
