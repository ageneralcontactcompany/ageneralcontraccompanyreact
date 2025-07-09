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
    <section
      id="contact"
      className="dark-section section-container"
      aria-labelledby="contact-heading"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="px-4 lg:px-0">
          <h2
            id="contact-heading"
            className="text-section lg:text-display-md font-semibold text-white mb-8"
          >
            Let's Start Building
            <br />
            <span className="text-gradient">Your Dream Project</span>
          </h2>
          <p className="text-body text-gray-300 mb-12 leading-relaxed">
            Ready to take the next step? Get your FREE, no-pressure consultation
            with Diego. We'll listen to your ideas, answer your questions, and
            provide honest guidance to help you make the best decisions for your
            project and budget.
          </p>

          <div className="space-y-6" role="list">
            <div className="flex items-center space-x-4" role="listitem">
              <div
                className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <Phone className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-white font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
                  aria-label={`Call Diego Hagans at ${formattedPhoneNumber}`}
                >
                  {formattedPhoneNumber}
                </a>
                <div className="text-gray-400">Call Diego Hagans</div>
              </div>
            </div>
            <div className="flex items-center space-x-4" role="listitem">
              <div
                className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <Mail className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <a
                  href={`mailto:${email}`}
                  className="text-white font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
                  aria-label={`Send email to ${email}`}
                >
                  {email}
                </a>
                <div className="text-gray-400">Send us an email</div>
              </div>
            </div>
            <div className="flex items-center space-x-4" role="listitem">
              <div
                className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <MapPin className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
                  aria-label={`View our location at ${address} on Google Maps`}
                >
                  {address}
                </a>
                <div className="text-gray-400">
                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Component */}
        <div className="minimal-card bg-white p-6 lg:p-8 rounded-xl shadow-lg mx-4 lg:mx-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
