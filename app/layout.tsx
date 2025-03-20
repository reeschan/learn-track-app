import AuthenticatedLayout from "components/ui/common/AuthenticatedLayout";
import Loading from "components/ui/common/Loading";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import AuthProvider from "./hooks/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn Track App",
  description: "Learn Track App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full">
      <body className={`h-full ${inter.className}`}>
        <AuthProvider>
          <Suspense fallback={<Loading />}>
            <AuthenticatedLayout>{children}</AuthenticatedLayout>
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  );
}
