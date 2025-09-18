"use client";
import ErrorStructuredData from "@/components/ErrorStructuredData";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const GlobalErrorPage = ({ error, reset }: ErrorPageProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleGoHome = () => {
    router.push("/en"); // Default to English
  };

  const handleTryAgain = () => {
    reset();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <ErrorStructuredData errorType="500" locale="en" />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Image
                src="/assets/images/logo-navbar.svg"
                alt="PT. PHILLIPPE SURYA PRATAMA Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              PT. PHILLIPPE SURYA PRATAMA
            </h1>
            <p className="text-sm text-gray-600">
              Industrial Welding & Valve Services
            </p>
          </div>

          {/* Error Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            {/* Error Icon */}
            <div className="w-24 h-24 mx-auto mb-6 bg-orange-50 rounded-full flex items-center justify-center">
              <IconifyIcon
                icon="lucide:server-crash"
                className="h-12 w-12 text-orange-500"
              />
            </div>

            {/* Error Code */}
            <div className="text-6xl font-bold text-orange-500 mb-4">500</div>

            {/* Error Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Internal Server Error
            </h2>

            {/* Error Description */}
            <p className="text-lg text-gray-600 mb-6">
              Something went wrong on our end. We&apos;re working to fix it.
            </p>

            {/* Error Message */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              We apologize for the inconvenience. Our technical team has been
              notified and is working to resolve this issue.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === "development" && error && (
              <div className="text-left bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                <h4 className="font-semibold text-red-800 mb-2">
                  Error Details:
                </h4>
                <p className="text-red-700 text-sm font-mono break-all">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-red-600 text-xs mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}

            {/* Suggestions */}
            <div className="text-left bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">
                In the meantime, you can:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <IconifyIcon
                    icon="lucide:check"
                    className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  />
                  Try refreshing the page
                </li>
                <li className="flex items-start">
                  <IconifyIcon
                    icon="lucide:check"
                    className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  />
                  Go back to the previous page
                </li>
                <li className="flex items-start">
                  <IconifyIcon
                    icon="lucide:check"
                    className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  />
                  Visit our homepage
                </li>
                <li className="flex items-start">
                  <IconifyIcon
                    icon="lucide:check"
                    className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  />
                  Contact us if the problem persists
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleTryAgain}
                className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primaryDark transition-colors duration-300 flex items-center justify-center"
              >
                <IconifyIcon
                  icon="lucide:refresh-cw"
                  className="h-5 w-5 mr-2"
                />
                Try Again
              </button>
              <button
                onClick={handleGoHome}
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                <IconifyIcon icon="lucide:home" className="h-5 w-5 mr-2" />
                Back to Home
              </button>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center text-gray-500 text-sm">
            <p>Need help? Contact us at +62-21-22556661</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalErrorPage;
