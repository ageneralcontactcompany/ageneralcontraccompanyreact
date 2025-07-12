import React, { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  phoneNumber: string;
}

const Header: React.FC<HeaderProps> = ({ phoneNumber }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to content link for 508 compliance */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-primary text-white px-4 py-2 rounded-md z-[60]"
      >
        Skip to main content
      </a>

      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
        role="banner"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div
                className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center"
                aria-label="AGCC - A General Construction Company"
              >
                <span
                  className="text-white font-bold text-sm"
                  aria-hidden="true"
                >
                  AGCC
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <nav
                className="hidden lg:flex items-center space-x-8 ml-auto"
                role="navigation"
                aria-label="Main navigation"
              >
                <a
                  href="#services"
                  className="text-black hover:text-brand-primary transition-colors font-medium text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-md px-2 py-1"
                >
                  Services
                </a>
                <a
                  href="#projects"
                  className="text-black hover:text-brand-primary transition-colors font-medium text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-md px-2 py-1"
                >
                  Projects
                </a>
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center text-black hover:text-brand-primary transition-colors font-medium text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-md px-2 py-1"
                  aria-label={`Call us at ${phoneNumber}`}
                >
                  <Phone className="w-4 h-4 mr-1" aria-hidden="true" /> Call Us
                </a>
              </nav>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <nav
            className="container mx-auto px-4 py-4 space-y-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <a
              href="#services"
              className="block text-black hover:text-brand-primary transition-colors font-medium text-base py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-md"
              onClick={closeMobileMenu}
            >
              Services
            </a>
            <a
              href="#projects"
              className="block text-black hover:text-brand-primary transition-colors font-medium text-base py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-md"
              onClick={closeMobileMenu}
            >
              Projects
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center text-black hover:text-brand-primary transition-colors font-medium text-base py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-md"
              onClick={closeMobileMenu}
              aria-label={`Call us at ${phoneNumber}`}
            >
              <Phone className="w-4 h-4 mr-2" aria-hidden="true" /> Call Us
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
