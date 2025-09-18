"use client";
import { useEffect, useState } from "react";

const useScrollEvent = () => {
  const [scrollPassed, setScrollPassed] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      setScrollY(window.scrollY);
      setScrollPassed(
        ((window.scrollY + window.innerHeight) * 100) /
          document.body.offsetHeight
      );
    }
  };

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined") {
      const handleScrollSetup = () => {
        setScrollY(window.scrollY);
        setScrollHeight(document.body.offsetHeight);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScrollSetup();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return {
    scrollPassed,
    scrollY: isClient ? scrollY : 0,
    scrollHeight,
    isClient,
  };
};

export default useScrollEvent;
