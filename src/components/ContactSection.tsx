import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";

interface ContactSectionProps {
  phoneNumber: string;
  formattedPhoneNumber: string;
  email: string;
  address: string;
  googleMapsLink: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  phoneNumber,
  formattedPhoneNumber,
  email,
  address,
  googleMapsLink,
}) => {
  return (
    <section id="contact" className="dark-section section-container">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-section lg:text-display-md font-semibold text-white mb-8">
            Ready to Start
            <br />
            <span className="text-gradient">Your Project?</span>
          </h2>
          <p className="text-body text-gray-300 mb-12 leading-relaxed">
            Contact us today to discuss your commercial or residential
            construction needs. We're here to make the process easy and
            stress-free.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-white font-semibold hover:underline"
                >
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
                <a
                  href={`mailto:${email}`}
                  className="text-white font-semibold hover:underline"
                >
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
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:underline"
                >
                  {address}
                </a>
                <div className="text-gray-400">
                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
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
  );
};

export default ContactSection;
