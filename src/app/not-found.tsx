"use client";
import ErrorStructuredData from "@/components/ErrorStructuredData";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const GlobalNotFoundPage = () => {
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

  const handleContact = () => {
    router.push("/en#contact");
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
      <ErrorStructuredData errorType="404" locale="en" />
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
            <div className="w-24 h-24 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center">
              <IconifyIcon
                icon="lucide:alert-triangle"
                className="h-12 w-12 text-red-500"
              />
            </div>

            {/* Error Code */}
            <div className="text-6xl font-bold text-red-500 mb-4">404</div>

            {/* Error Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>

            {/* Error Description */}
            <p className="text-lg text-gray-600 mb-6">
              The page you are looking for doesn&apos;t exist or has been moved.
            </p>

            {/* Error Message */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              We&apos;re sorry, but the page you requested could not be found.
              It may have been moved, deleted, or the URL might be incorrect.
            </p>

            {/* Suggestions */}
            <div className="text-left bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">
                Here are some suggestions:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <IconifyIcon
                    icon="lucide:check"
                    className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  />
                  Check the URL for typos
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
                  Contact us for assistance
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGoHome}
                className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primaryDark transition-colors duration-300 flex items-center justify-center"
              >
                <IconifyIcon icon="lucide:home" className="h-5 w-5 mr-2" />
                Back to Home
              </button>
              <button
                onClick={handleContact}
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                <IconifyIcon
                  icon="lucide:message-circle"
                  className="h-5 w-5 mr-2"
                />
                Contact Us
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

export default GlobalNotFoundPage;
