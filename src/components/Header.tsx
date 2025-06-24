import React from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  phoneNumber: string;
}

const Header: React.FC<HeaderProps> = ({ phoneNumber }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">AGCC</span>
            </div>
            <span className="text-lg font-display font-bold text-black">
              A General Construction Company
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <nav className="hidden lg:flex items-center space-x-8 ml-auto">
              <a
                href="#services"
                className="text-black hover:text-brand-primary transition-colors font-medium text-sm"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-black hover:text-brand-primary transition-colors font-medium text-sm"
              >
                Projects
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center text-black hover:text-brand-primary transition-colors font-medium text-sm"
              >
                <Phone className="w-4 h-4 mr-1" /> Call Us
              </a>
            </nav>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden border-gray-200"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
