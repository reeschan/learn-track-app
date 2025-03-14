import AuthProvider from "./providers/AuthProvider";
import { Suspense } from "react";
import Loading from "app/ui/common/Loading";
import { Inter } from "next/font/google";

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
    <html lang="ja">
      <body className={inter.className}>
        <AuthProvider>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  );
}