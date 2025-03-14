"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { Box, CircularProgress, CssBaseline } from "@mui/material";
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // 認証済みの場合はサイドバー付きレイアウト
  if (isAuthenticated) {
    return <SidebarLayout title={title}>{children}</SidebarLayout>;
  }

  // 未認証の場合はシンプルなレイアウト
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default AuthenticatedLayout;
