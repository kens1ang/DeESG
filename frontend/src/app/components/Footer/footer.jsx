"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const checkHeight = () => {
      // Compare body height with viewport height
      setIsSticky(document.body.scrollHeight <= window.innerHeight);
    };

    // Check height on mount and resize
    checkHeight();
    window.addEventListener("resize", checkHeight);

    return () => {
      window.removeEventListener("resize", checkHeight);
    };
  }, []);

  return (
    <footer
      className={`bg-white h-20 w-screen ${
        isSticky ? "absolute bottom-0" : "relative"
      }`}
    >
      <div className="border-t border-gray-200" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4">
        <div className="h-full flex flex-col pt-2 md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; <span className="font-bold">Greenesis </span>
              {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
