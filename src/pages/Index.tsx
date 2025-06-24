import React from "react";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Menu,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Award,
  CheckCircle2,
} from "lucide-react";

import ContactForm from "@/components/ui/ContactForm";

const Index = () => {
  // Contact information constants
  const phoneNumber = "2407399223"; // No dashes for tel: link
  const formattedPhoneNumber = "240-739-9223"; // Formatted for display
  const email = "agcontractservice@gmail.com";
  const address = "5159 Pooks Hill Rd, Bethesda, MD 20814";
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold text-black">
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

      {/* Hero Section */}
      <section className="min-h-screen bg-white flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl">
            <div className="animate-fade-in">
              <h1 className="text-hero lg:text-display-lg font-medium text-black mb-8 leading-tight">
                Commercial & Residential
                <br />
                <span className="text-gradient">
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

      {/* Transform Section */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-section lg:text-display-md font-semibold text-black mb-8 leading-tight">
              Transform Your Space
              <br />
              With Our Expertise
            </h2>
            <p className="text-body text-gray-600 mb-8 leading-relaxed">
              Whether you're a business owner looking to upgrade your commercial 
              space or a homeowner planning a renovation, we provide seamless 
              construction solutions tailored to your needs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0" />
                <span className="text-body text-gray-700">
                  Commercial construction & remodeling
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0" />
                <span className="text-body text-gray-700">
                  Residential renovations & additions
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0" />
                <span className="text-body text-gray-700">
                  Easy to work with - focused on your vision
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Construction site with modern architecture"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-black">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 section-container">
        <div className="text-center mb-20">
          <h2 className="text-section lg:text-display-md font-semibold text-black mb-6">
            Our Services
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction solutions for both commercial and residential projects
          </p>
        </div>

        <div className="space-y-16">
          {[
            {
              number: "01",
              title: "Commercial Construction",
              description:
                "From office build-outs to retail spaces, we deliver quality commercial construction with minimal disruption to your business.",
              image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              number: "02",
              title: "Residential Renovations",
              description:
                "Transform your home with our residential construction services, including kitchen remodels, bathroom upgrades, and home additions.",
              image:
                "https://images.pexels.com/photos/7475555/pexels-photo-7475555.jpeg?auto=compress&cs=tinysrgb&w=800",
            },
            {
              number: "03",
              title: "Project Management",
              description:
                "Our experienced team manages your project from start to finish, ensuring quality results on time and within budget.",
              image:
                "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-16 items-center service-card group ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="service-number mb-4">{service.number}</div>
                <h3 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                  {service.title}
                </h3>
                <p className="text-body text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="section-container">
        <div className="grid md:grid-cols-3 gap-16 text-center">
          <div>
            <div className="text-6xl lg:text-8xl font-bold text-brand-primary mb-4">
              91
            </div>
            <div className="text-gray-600 font-medium tracking-widest uppercase">
              Projects
            </div>
          </div>
          <div>
            <div className="text-6xl lg:text-8xl font-bold text-brand-primary mb-4">
              11
            </div>
            <div className="text-gray-600 font-medium tracking-widest uppercase">
              States
            </div>
          </div>
          <div>
            <div className="text-6xl lg:text-8xl font-bold text-brand-primary mb-4">
              10
            </div>
            <div className="text-gray-600 font-medium tracking-widest uppercase">
              Years
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="dark-section section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-section lg:text-display-md font-semibold text-white mb-8">
              Ready to Start
              <br />
              <span className="text-gradient">Your Project?</span>
            </h2>
            <p className="text-body text-gray-300 mb-12 leading-relaxed">
              Contact us today to discuss your commercial or residential construction needs. 
              We're here to make the process easy and stress-free.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <a href={`tel:${phoneNumber}`} className="text-white font-semibold hover:underline">
                    {formattedPhoneNumber}
                  </a>
                  <div className="text-gray-400">Call Diego Hagans</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <a href={`mailto:${email}`} className="text-white font-semibold hover:underline">
                    {email}
                  </a>
                  <div className="text-gray-400">Send us an email</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">
                    {address}
                  </a>
                  <div className="text-gray-400">
                    <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Component */}
          <div className="minimal-card bg-white p-8 rounded-xl shadow-lg">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-display font-bold text-black">
                  A General Construction Company
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Making construction easy for businesses and homeowners throughout the region.
              </p>
            </div>

            <div>
              <h4 className="text-black font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Commercial Construction</li>
                <li>Residential Renovations</li>
                <li>Project Management</li>
              </ul>
            </div>

            <div>
              <h4 className="text-black font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href={`tel:${phoneNumber}`} className="hover:text-brand-primary hover:underline">
                    Phone: {formattedPhoneNumber}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${email}`} className="hover:text-brand-primary hover:underline">
                    Email: {email}
                  </a>
                </li>
                <li>
                  <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary hover:underline">
                    Address: {address}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-12">
            &copy; {new Date().getFullYear()} A General Construction Company.
            All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;