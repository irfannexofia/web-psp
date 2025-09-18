"use client";

import Gumshoe from "gumshoejs";
import { useEffect, useRef, useState } from "react";

interface MapEmbedProps {
  className?: string;
  height?: string;
  mapData?: {
    title: string;
    description: string;
    companyName: string;
    companyTagline: string;
    address: string;
    area: string;
    hours: string;
  };
}

export default function MapEmbed({
  className = "",
  height = "400px",
  mapData,
}: MapEmbedProps) {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && navRef.current) {
      new Gumshoe(".navbar-nav a", { offset: 80 });
    }
  }, []);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Dynamically load and initialize Gumshoe on client side
    if (typeof window !== "undefined" && navRef.current) {
      let gumshoe: { destroy: () => void } | null = null;

      // Dynamic import of Gumshoe for better performance
      import("gumshoejs")
        .then((Gumshoe) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          gumshoe = new (Gumshoe as any).default(".navbar-nav a", {
            offset: 80,
          });
        })
        .catch((error) => {
          console.warn("Failed to load Gumshoe:", error);
        });

      // Cleanup function
      return () => {
        if (gumshoe && gumshoe.destroy) {
          gumshoe.destroy();
        }
        window.removeEventListener("resize", checkMobile);
      };
    }
  }, []);

  return (
    <div className={`relative w-full ${className}`} style={{ height }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4948.782212698014!2d106.6938223!3d-6.0914356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a03b6ec20392b%3A0x4c36cfa2db09d988!2sPT.%20Phillippe%20Surya%20Pratama!5e1!3m2!1sid!2sid!4v1758155118412!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg"
        title="PT. Phillippe Surya Pratama Location"
      />

      {/* Overlay with company info */}
      {mapData && !isMobile && (
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">
                {mapData.companyName}
              </h3>
              <p className="text-xs text-gray-600">{mapData.companyTagline}</p>
            </div>
          </div>
          <div className="text-xs text-gray-700">
            <p className="mb-1">
              <strong>Address:</strong> {mapData.address}
            </p>
            <p className="mb-1">
              <strong>Area:</strong> {mapData.area}
            </p>
            <p>
              <strong>Hours:</strong> {mapData.hours}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
