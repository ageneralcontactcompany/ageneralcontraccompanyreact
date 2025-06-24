import React from "react";

interface FooterProps {
  phoneNumber: string;
  formattedPhoneNumber: string;
  email: string;
  address: string;
  googleMapsLink: string;
}

const Footer: React.FC<FooterProps> = ({
  phoneNumber,
  formattedPhoneNumber,
  email,
  address,
  googleMapsLink,
}) => {
  return (
    <footer
      className="bg-white border-t border-gray-200"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div
                className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center"
                aria-label="AGCC Logo"
              >
                <span
                  className="text-white font-bold text-sm"
                  aria-hidden="true"
                >
                  AGCC
                </span>
              </div>
              <span className="text-lg lg:text-xl font-display font-bold text-black">
                A General Construction Company
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Making construction easy for businesses and homeowners throughout
              the region.
            </p>
          </div>

          <div>
            <h4 className="text-black font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600" role="list">
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-primary hover:underline focus:outline-none focus:ring-2 focus:ring-brand-primary rounded"
                >
                  Commercial Construction
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-primary hover:underline focus:outline-none focus:ring-2 focus:ring-brand-primary rounded"
                >
                  Residential Renovations
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-primary hover:underline focus:outline-none focus:ring-2 focus:ring-brand-primary rounded"
                >
                  Project Management
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <h4 className="text-black font-semibold mb-4">
              Contact Information
            </h4>
            <ul className="space-y-3 text-gray-600" role="list">
              <li>
                <a
                  href={`tel:${phoneNumber}`}
                  className="hover:text-brand-primary hover:underline focus:outline-none focus:ring-2 focus:ring-brand-primary rounded"
                  aria-label={`Call us at ${formattedPhoneNumber}`}
                >
                  Phone: {formattedPhoneNumber}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-brand-primary hover:underline focus:outline-none focus:ring-2 focus:ring-brand-primary rounded"
                  aria-label={`Send email to ${email}`}
                >
                  Email: {email}
                </a>
              </li>
              <li>
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-primary hover:underline focus:outline-none focus:ring-2 focus:ring-brand-primary rounded"
                  aria-label={`View our location at ${address} on Google Maps`}
                >
                  Address: {address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-12 pt-8 border-t border-gray-100">
          &copy; {new Date().getFullYear()} A General Construction Company. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
