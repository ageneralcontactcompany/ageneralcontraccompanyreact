import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TransformSection from "@/components/TransformSection";
import ServicesSection from "@/components/ServicesSection";
import StatisticsSection from "@/components/StatisticsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  // Contact information constants
  const phoneNumber = "2407399223"; // No dashes for tel: link
  const formattedPhoneNumber = "240-739-9223"; // Formatted for display
  const email = "agcontractservice@gmail.com";
  const address = "5159 Pooks Hill Rd, Bethesda, MD 20814";
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="min-h-screen">
      <Header phoneNumber={phoneNumber} />

      <HeroSection phoneNumber={phoneNumber} />

      <TransformSection />

      <ServicesSection />

      <StatisticsSection />

      <ContactSection
        phoneNumber={phoneNumber}
        formattedPhoneNumber={formattedPhoneNumber}
        email={email}
        address={address}
        googleMapsLink={googleMapsLink}
      />

      <Footer
        phoneNumber={phoneNumber}
        formattedPhoneNumber={formattedPhoneNumber}
        email={email}
        address={address}
        googleMapsLink={googleMapsLink}
      />

      <ChatWidget
        phoneNumber={phoneNumber}
        formattedPhoneNumber={formattedPhoneNumber}
        email={email}
      />
    </div>
  );
};

export default Index;
