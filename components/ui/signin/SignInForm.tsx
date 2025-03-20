"use client";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import ProviderSignInButton from "./ProviderSignInButton";

type Provider = {
  id: string;
  name: string;
};

interface SignInFormProps {
  providers: Provider[];
  error?: string;
  callbackUrl: string;
}

export default function SignInForm({
  providers,
  error,
  callbackUrl,
}: SignInFormProps) {
  const getErrorMessage = (errorType?: string) => {
    if (!errorType) return null;

    switch (errorType) {
      case "CredentialsSignin":
        return "Invalid email or password";
      case "AccessDenied":
        return "Access denied. You do not have permission to sign in.";
      default:
        return "An error occurred during sign in";
    }
  };

  const errorMessage = getErrorMessage(error);

  return (
    <div className="mx-auto mt-16 max-w-md px-4 sm:px-6 md:mt-24 lg:px-8">
      <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-col items-center">
            <h1 className="mb-3 text-2xl font-semibold text-primary-600">
              Welcome
            </h1>

            <p className="mb-6 text-center text-gray-500">
              Log in to your account to continue
            </p>

            {errorMessage && (
              <div className="mb-4 w-full rounded-md bg-red-50 p-4 dark:bg-red-900/30">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                      {errorMessage}
                    </h3>
                  </div>
                </div>
              </div>
            )}
            {providers.length > 0 && (
              <>
                <div className="flex w-full flex-col gap-3">
                  {providers.map((provider) => (
                    <ProviderSignInButton
                      key={provider.id}
                      provider={provider}
                      callbackUrl={callbackUrl}
                    />
                  ))}
                </div>
              </>
            )}

            <div className="mt-8 text-center">
              <a
                href="/signup"
                className="text-sm font-semibold text-primary-600 hover:underline"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
