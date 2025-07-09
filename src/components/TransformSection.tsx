import React from "react";
import { CheckCircle2, Award } from "lucide-react";

const TransformSection: React.FC = () => {
  return (
    <section className="section-container" aria-labelledby="transform-heading">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="animate-slide-in-left px-4 lg:px-0">
          <h2
            id="transform-heading"
            className="text-section lg:text-display-md font-semibold text-black mb-8 leading-tight"
          >
            Your Project, Our Expertise
            <br />
            <span className="text-brand-primary">Delivered with Care</span>
          </h2>
          <p className="text-body text-gray-600 mb-8 leading-relaxed">
            Every project tells a story. Whether it's updating your family home,
            expanding your business space, or bringing a new vision to life,
            we're here to listen, guide, and deliver results that make you proud
            to show off.
          </p>
          <ul className="space-y-4" role="list">
            <li className="flex items-center space-x-3">
              <CheckCircle2
                className="w-6 h-6 text-brand-primary flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-body text-gray-700">
                Commercial construction & remodeling
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle2
                className="w-6 h-6 text-brand-primary flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-body text-gray-700">
                Residential renovations & additions
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle2
                className="w-6 h-6 text-brand-primary flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-body text-gray-700">
                Easy to work with - focused on your vision
              </span>
            </li>
          </ul>
        </div>
        <div className="relative px-4 lg:px-0">
          <img
            src="https://images.pexels.com/photos/9300985/pexels-photo-9300985.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Modern construction site with professional workers and equipment on a high-rise building project"
            className="rounded-3xl shadow-2xl w-full transition-transform duration-300 hover:scale-105 focus:scale-105"
            loading="lazy"
            tabIndex={0}
          />
          <div
            className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 bg-white rounded-2xl p-4 lg:p-6 shadow-xl"
            role="complementary"
            aria-label="Company statistics"
          >
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div
                className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center"
                aria-hidden="true"
              >
                <Award className="w-5 h-5 lg:w-6 lg:h-6 text-brand-primary" />
              </div>
              <div>
                <div className="text-xl lg:text-2xl font-bold text-black">
                  10+
                </div>
                <div className="text-xs lg:text-sm text-gray-600">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformSection;
