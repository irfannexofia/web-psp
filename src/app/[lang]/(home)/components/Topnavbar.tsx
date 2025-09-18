"use client";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import useScrollEvent from "@/hooks/useScrollEvent";
import Gumshoe from "gumshoejs";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface Dictionary {
  navigation: {
    home: string;
    about: string;
    services: string;
    products: string;
    certificates: string;
    clients: string;
    contact: string;
  };
}

interface TopnavbarProps {
  dictionary: Dictionary;
}

const Topnavbar = ({ dictionary }: TopnavbarProps) => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = params.lang as string;
  const { scrollY, isClient } = useScrollEvent();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
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

  // Close language switcher when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLangOpen) {
        const target = event.target as Element;
        if (!target.closest(".language-switcher")) {
          setIsLangOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const switchLanguage = (newLang: string) => {
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };
  return (
    <>
      <nav
        ref={navRef}
        className={`navbar ${isClient && (scrollY >= 50 || isMobile) && " is-sticky"}  fixed top-0 start-0 end-0 z-999 transition-all duration-500 py-5 items-center shadow-md lg:shadow-none [&.is-sticky]:bg-white group [&.is-sticky]:shadow-md bg-white lg:bg-transparent`}
        id="navbar"
      >
        <div className="container">
          <div className="flex lg:flex-nowrap flex-wrap items-center justify-between lg:justify-start">
            <div className="flex items-center">
              <a href="#home" className="flex items-center space-x-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/images/logo-navbar.svg"
                    alt="PT. PHILLIPPE SURYA PRATAMA Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div
                    className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold transition-colors ${
                      isClient && (scrollY >= 50 || isMobile)
                        ? "text-gray-900"
                        : "text-white"
                    }`}
                  >
                    PT. PHILLIPPE SURYA PRATAMA
                  </div>
                  <div
                    className={`text-xs sm:text-xs md:text-sm transition-colors ${
                      isClient && (scrollY >= 50 || isMobile)
                        ? "text-gray-700"
                        : "text-gray-200"
                    }`}
                  >
                    {currentLang === "id"
                      ? "Layanan Las Industri & Valve"
                      : "Industrial Welding & Valve Services"}
                  </div>
                </div>
              </a>
            </div>
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="hs-collapse-toggle"
                type="button"
                id="hs-unstyled-collapse"
                data-hs-collapse="#navbarCollapse"
              >
                <IconifyIcon
                  icon="lucide:menu"
                  className={`h-8 w-8 ${isClient && (scrollY >= 50 || isMobile) ? "text-black" : "text-white"}`}
                />
              </button>
            </div>
            <div
              className=" navigation hs-collapse transition-all duration-300 lg:basis-auto basis-full grow hidden items-center justify-center lg:flex mx-auto overflow-hidden mt-6 lg:mt-0 nav-light"
              id="navbarCollapse"
            >
              <ul
                className="navbar-nav flex-col lg:flex-row gap-y-2 flex lg:items-center justify-center"
                id="navbar-navlist"
              >
                <li
                  className={`nav-item mx-1.5 transition-all ${isClient && (scrollY >= 50 || isMobile) ? "text-dark lg:text-black" : "text-white lg:text-white"} group-[&.is-sticky]:text-dark all duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary`}
                >
                  <a
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="#home"
                  >
                    {dictionary.navigation.home}
                  </a>
                </li>
                <li
                  className={`nav-item mx-1.5 transition-all ${isClient && (scrollY >= 50 || isMobile) ? "text-dark lg:text-black" : "text-white lg:text-white"} group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary`}
                >
                  <a
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="#about"
                  >
                    {dictionary.navigation.about}
                  </a>
                </li>
                <li
                  className={`nav-item mx-1.5 transition-all ${isClient && (scrollY >= 50 || isMobile) ? "text-dark lg:text-black" : "text-white lg:text-white"} group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary`}
                >
                  <a
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="#certificates"
                  >
                    {dictionary.navigation.certificates}
                  </a>
                </li>
                <li
                  className={`nav-item mx-1.5 transition-all ${isClient && (scrollY >= 50 || isMobile) ? "text-dark lg:text-black" : "text-white lg:text-white"} group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary`}
                >
                  <a
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="#services"
                  >
                    {dictionary.navigation.services}
                  </a>
                </li>
                <li
                  className={`nav-item mx-1.5 transition-all ${isClient && (scrollY >= 50 || isMobile) ? "text-dark lg:text-black" : "text-white lg:text-white"} group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary`}
                >
                  <a
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="#products"
                  >
                    {dictionary.navigation.products}
                  </a>
                </li>
                <li
                  className={`nav-item mx-1.5 transition-all ${isClient && (scrollY >= 50 || isMobile) ? "text-dark lg:text-black" : "text-white lg:text-white"} group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary`}
                >
                  <a
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="#clients"
                  >
                    {dictionary.navigation.clients}
                  </a>
                </li>
                <li
                  className={`nav-item mx-1.5 transition-all ${isClient && (scrollY >= 50 || isMobile) ? "text-dark lg:text-black" : "text-white lg:text-white"} group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary`}
                >
                  <a
                    className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                    href="#contact"
                  >
                    {dictionary.navigation.contact}
                  </a>
                </li>
              </ul>
            </div>
            <div className="ms-auto shrink hidden lg:inline-flex gap-2">
              {/* Language Switcher */}
              <div className="relative group language-switcher">
                <button
                  className={`py-2 px-3 inline-flex items-center gap-1 rounded-md text-sm ${isClient && (scrollY >= 50 || isMobile) ? "text-black" : "text-white"} hover:bg-white/10 transition-all duration-300 font-medium`}
                  onClick={() => setIsLangOpen(!isLangOpen)}
                >
                  <IconifyIcon icon="lucide:globe" className="h-4 w-4" />
                  <span className="uppercase">{currentLang}</span>
                  <IconifyIcon icon="lucide:chevron-down" className="h-3 w-3" />
                </button>
                <div
                  className={`absolute top-full right-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 py-1 min-w-[120px] z-50 ${isLangOpen ? "block" : "hidden"}`}
                >
                  <button
                    onClick={() => {
                      switchLanguage("en");
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition-colors ${
                      currentLang === "en"
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    🇺🇸 English
                  </button>
                  <button
                    onClick={() => {
                      switchLanguage("id");
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition-colors ${
                      currentLang === "id"
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    🇮🇩 Indonesia
                  </button>
                </div>
              </div>

              <a
                href="#contact"
                className="py-2 px-6 inline-flex items-center gap-2 rounded-md text-base text-white bg-primary hover:bg-primaryDark transition-all duration-500 font-medium"
              >
                <IconifyIcon
                  icon="lucide:message-circle"
                  className="h-4 w-4 fill-white/40"
                />
                <span className="hidden sm:block">
                  {currentLang === "id" ? "Hubungi Kami" : "Contact Us"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topnavbar;
