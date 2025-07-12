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

            {/* Social Media Icons */}
            <div className="space-y-4">
              <h5 className="text-black font-semibold text-sm">Follow Us</h5>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://facebook.com/AGCCConstruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-brand-primary hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  aria-label="Follow us on Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/AGCCConstruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-brand-primary hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  aria-label="Follow us on Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/AGCCConstruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-brand-primary hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/AGCCConstruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-brand-primary hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  aria-label="Follow us on Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@AGCCConstruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-brand-primary hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  aria-label="Watch us on YouTube"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://blog.agcconstruction.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-brand-primary hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  aria-label="Read our blog"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </a>
                <a
                  href="https://g.page/r/AGCCConstruction/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-brand-primary hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  aria-label="Review us on Google"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-brand-primary hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  aria-label="Find us on Yelp"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.017 1.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5 7.5-3.358 7.5-7.5-3.358-7.5-7.5-7.5zm-.026 13.665c-3.392 0-6.142-2.75-6.142-6.142s2.75-6.142 6.142-6.142 6.142 2.75 6.142 6.142-2.75 6.142-6.142 6.142z" />
                    <path d="M11.026 11.5h2v2h-2v-2zm0-6h2v4.5h-2V5.5z" />
                  </svg>
                </a>
              </div>
            </div>
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
