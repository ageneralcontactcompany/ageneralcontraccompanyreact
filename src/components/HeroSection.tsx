import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  phoneNumber: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ phoneNumber }) => {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl">
          <div className="animate-fade-in">
            <h1 className="text-hero lg:text-display-lg font-medium text-black mb-8 leading-tight">
              Commercial & Residential
              <br />
              <span className="text-gradient text-4xl lg:text-5xl">
                Your Trusted Construction Partner
              </span>
            </h1>
            <p className="text-body text-gray-600 max-w-2xl mb-12 leading-relaxed">
              We make construction easy for businesses and homeowners alike.
              With our expertise and customer-focused approach, you're in the
              right place to bring your project to life.
            </p>
          </div>
        </div>
      </div>

      {/* Get In Touch Button - Now clickable to call */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <a href={`tel:${phoneNumber}`} className="no-underline">
          <Button className="brand-button flex items-center gap-2">
            <Phone className="w-5 h-5" /> Get In Touch
          </Button>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-gray-500">
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
