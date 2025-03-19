"use client";

import React from "react";
import { useSession } from "next-auth/react";
import SidebarLayout from "./SidebarLayout";

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({
  children,
  title,
}) => {
  // クライアントサイドレンダリング用の状態
  const { status } = useSession();
  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";

  // クライアントサイドでのレンダリング
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary-600 border-t-transparent"></div>
      </div>
    );
  }

  // 認証済みの場合はサイドバー付きレイアウト
  if (isAuthenticated) {
    return <SidebarLayout title={title}>{children}</SidebarLayout>;
  }

  // 未認証の場合はシンプルなレイアウト
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
};

export default AuthenticatedLayout;