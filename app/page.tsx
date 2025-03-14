"use client";
import Loading from "app/ui/common/Loading";
import { Suspense } from "react";

export default function Home() {
  return <Suspense fallback={<Loading />}></Suspense>;
}
