// components/ui/common/ErrorAlert.tsx
"use client";

import React from "react";

type ErrorAlertProps = {
  message: string | null;
  onClose?: () => void;
};

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  // messageがnullまたは空文字の場合は何も表示しない
  if (!message) {
    return null;
  }

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
      <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg shadow-lg p-4 flex justify-between items-start">
        <div className="flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-red-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>{message}</span>
        </div>
        <button
          onClick={handleClose}
          className="text-red-600 hover:text-red-800 focus:outline-none"
          aria-label="閉じる"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ErrorAlert;
