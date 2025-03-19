"use client";
import { EyeIcon, EyeSlashIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function CredentialsForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      action="/api/auth/callback/credentials"
      method="post"
      className="w-full"
    >
      <div className="mb-4">
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-gray-300 pl-10 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            placeholder="Email Address"
            required
            autoComplete="email"
            autoFocus
          />
        </div>
      </div>

      <div className="mb-6">
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            className="block w-full rounded-md border-gray-300 pl-10 pr-10 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            placeholder="Password"
            required
            autoComplete="current-password"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <EyeIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-primary-600 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        Log In
      </button>
    </form>
  );
}