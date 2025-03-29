"use client";
import {
  Bars3Icon,
  ChevronLeftIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { classNames } from "../../../utils/classNames";

interface SidebarLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  children,
  title = "アプリケーション",
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    // 非モバイル時は自動的にサイドバーを開く
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  // モバイル時にサイドバー開閉時に背景をロック
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = sidebarOpen ? "hidden" : "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen, isMobile]);

  const menuItems = [
    {
      text: "サマリー",
      icon: <DocumentTextIcon className="h-6 w-6" />,
      path: "/summary",
    },
    {
      text: "設定",
      icon: <Cog6ToothIcon className="h-6 w-6" />,
      path: "/settings",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* モバイル用背景オーバーレイ */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-gray-600 bg-opacity-75 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* サイドバー */}
      <div
        className={classNames(
          "fixed inset-y-0 left-0 z-30 flex w-64 flex-col bg-white transition-all duration-300 ease-in-out dark:bg-gray-800",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          isMobile ? "shadow-lg" : ""
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Learn Track
          </h2>
          <button
            type="button"
            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <span className="sr-only">Close sidebar</span>
            <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-grow flex-col overflow-y-auto">
          <nav className="flex-1 space-y-1 px-2 py-4">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.text}
                  href={item.path}
                  className={classNames(
                    isActive
                      ? "bg-gray-100 text-primary-600 dark:bg-gray-700 dark:text-white"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                    "group flex items-center rounded-md px-2 py-2 text-base font-medium"
                  )}
                >
                  <div
                    className={classNames(
                      isActive
                        ? "text-primary-600 dark:text-white"
                        : "text-gray-400 group-hover:text-gray-500 dark:group-hover:text-white",
                      "mr-4 flex-shrink-0"
                    )}
                  >
                    {item.icon}
                  </div>
                  {item.text}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="flex flex-1 flex-col md:pl-64">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow dark:bg-gray-800">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden dark:border-gray-700 dark:text-gray-400"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-1 items-center justify-between px-4">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h1>
          </div>
        </div>

        <main className="flex-1 bg-gray-100 p-6 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;
