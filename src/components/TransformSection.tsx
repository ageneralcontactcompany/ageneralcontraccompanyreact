import React from "react";
import { CheckCircle2, Award } from "lucide-react";

const TransformSection: React.FC = () => {
  return (
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
  );
};

export default TransformSection;
