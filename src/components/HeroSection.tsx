import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  phoneNumber: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ phoneNumber }) => {
  return (
    <section
      id="main-content"
      className="min-h-screen bg-white flex flex-col justify-center relative overflow-hidden pt-20"
      role="main"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl">
          <div className="animate-fade-in">
            <h1
              id="hero-heading"
              className="text-hero lg:text-display-lg font-medium text-black mb-8 leading-tight"
            >
              Your Trusted Construction Partner
              <br />
              <span className="text-gradient text-4xl lg:text-5xl">
                Building Dreams into Reality
              </span>
            </h1>
            <p className="text-body text-gray-600 max-w-2xl mb-12 lg:mb-16 leading-relaxed">
              Experience the difference of working with Maryland's most reliable
              construction team. We've earned the trust of 90+ families and
              businesses through honest communication, superior craftsmanship,
              and projects completed on time and within budget.
            </p>
          </div>
        </div>
      </div>

      {/* Get In Touch Button - Fixed mobile positioning */}
      <div className="absolute bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 px-4 w-full max-w-xs lg:max-w-none lg:w-auto">
        <a
          href={`tel:${phoneNumber}`}
          className="no-underline focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-lg block w-full lg:w-auto"
          aria-label={`Call us at ${phoneNumber} to get in touch`}
        >
          <Button className="brand-button flex items-center justify-center gap-2 px-6 py-3 text-base w-full lg:w-auto">
            <Phone className="w-5 h-5" aria-hidden="true" /> Get In Touch
          </Button>
        </a>
      </div>

      {/* Scroll Indicator - Fixed mobile spacing */}
      <div
        className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2"
        role="presentation"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center text-gray-500">
          <span className="text-xs lg:text-sm mb-1 lg:mb-2">Scroll</span>
          <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5 animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
