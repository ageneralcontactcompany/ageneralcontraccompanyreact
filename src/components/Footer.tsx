import React from "react";
import { Building2 } from "lucide-react";

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
              Making construction easy for businesses and homeowners throughout
              the region.
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
                <a
                  href={`tel:${phoneNumber}`}
                  className="hover:text-brand-primary hover:underline"
                >
                  Phone: {formattedPhoneNumber}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-brand-primary hover:underline"
                >
                  Email: {email}
                </a>
              </li>
              <li>
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-primary hover:underline"
                >
                  Address: {address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-12">
          &copy; {new Date().getFullYear()} A General Construction Company. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
