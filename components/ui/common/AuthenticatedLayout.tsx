import { auth } from "auth";
import React from "react";
import SidebarLayout from "./SidebarLayout";

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = async ({
  children,
  title,
}) => {
  // クライアントサイドレンダリング用の状態
  const session = await auth();
  const isLoading = session?.user === null;
  const isAuthenticated = session?.user !== null;

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
