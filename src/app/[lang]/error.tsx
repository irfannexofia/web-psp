"use client";
import ErrorStructuredData from "@/components/ErrorStructuredData";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Dictionary {
  errors: {
    "500": {
      title: string;
      subtitle: string;
      description: string;
      message: string;
      suggestions: string;
      suggestion1: string;
      suggestion2: string;
      suggestion3: string;
      suggestion4: string;
      backHome: string;
      contactUs: string;
      tryAgain: string;
    };
  };
}

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  const params = useParams();
  const router = useRouter();
  const [dictionary, setDictionary] = useState<Dictionary | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const currentLang = params.lang as string;

  useEffect(() => {
    const loadDictionary = async () => {
      try {
        const dict = await import(`./dictionaries/${currentLang}.json`);
        setDictionary(dict.default);
      } catch (error) {
        console.error("Failed to load dictionary:", error);
        // Fallback to English if current language fails
        const fallbackDict = await import(`./dictionaries/en.json`);
        setDictionary(fallbackDict.default);
      } finally {
        setIsLoading(false);
      }
    };

    loadDictionary();
  }, [currentLang]);

  const handleGoHome = () => {
    router.push(`/${currentLang}`);
  };

  const handleContact = () => {
    router.push(`/${currentLang}#contact`);
  };

  const handleTryAgain = () => {
    reset();
  };

  if (isLoading || !dictionary) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const errorData = dictionary.errors["500"];

  return (
    <>
      <ErrorStructuredData
        errorType="500"
        locale={currentLang as "en" | "id"}
      />
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
              {errorData.title}
            </h2>

            {/* Error Description */}
            <p className="text-lg text-gray-600 mb-6">
              {errorData.description}
            </p>

            {/* Error Message */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              {errorData.message}
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
                {errorData.suggestions}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <IconifyIcon
                    icon="lucide:check"
                    className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  />
                  {errorData.suggestion1}
                </li>
                <li className="flex items-start">
                  <IconifyIcon
                    icon="lucide:check"
                    className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  />
                  {errorData.suggestion2}
                </li>
                <li className="flex items-start">
                  <IconifyIcon
                    icon="lucide:check"
                    className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  />
                  {errorData.suggestion3}
                </li>
                <li className="flex items-start">
                  <IconifyIcon
                    icon="lucide:check"
                    className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  />
                  {errorData.suggestion4}
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
                {errorData.tryAgain}
              </button>
              <button
                onClick={handleGoHome}
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                <IconifyIcon icon="lucide:home" className="h-5 w-5 mr-2" />
                {errorData.backHome}
              </button>
              <button
                onClick={handleContact}
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
              >
                <IconifyIcon
                  icon="lucide:message-circle"
                  className="h-5 w-5 mr-2"
                />
                {errorData.contactUs}
              </button>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center text-gray-500 text-sm">
            <p>
              {currentLang === "id"
                ? "Butuh bantuan? Hubungi kami di +62-21-22556661"
                : "Need help? Contact us at +62-21-22556661"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
