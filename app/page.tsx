"use client";
import Loading from "app/ui/common/Loading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/summary/create");
    }
  }, [session, router]);

  return <Suspense fallback={<Loading />}></Suspense>;
}
