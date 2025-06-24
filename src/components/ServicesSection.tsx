import React from "react";

const ServicesSection: React.FC = () => {
  const services = [
    {
      number: "01",
      title: "Commercial Construction",
      description:
        "Transform your business space with cutting-edge commercial construction. From modern office build-outs to stunning retail environments, we create spaces that drive success and impress your clients.",
      image:
        "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt:
        "Low-angle view of a modern glass skyscraper against clear sky showcasing contemporary commercial architecture",
    },
    {
      number: "02",
      title: "Residential Renovations",
      description:
        "Bring your dream home to life with our premium residential services. Luxurious kitchen remodels, spa-like bathrooms, and stunning home additions that increase your property value.",
      image:
        "https://images.pexels.com/photos/8134772/pexels-photo-8134772.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt:
        "Bright, spacious modern kitchen featuring minimalist design and contemporary appliances",
    },
    {
      number: "03",
      title: "Project Management",
      description:
        "Experience stress-free construction with our expert project management. We handle every detail from permits to final walkthrough, delivering exceptional results on time and within budget.",
      image:
        "https://images.pexels.com/photos/6285133/pexels-photo-6285133.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt:
        "Two professional engineers discussing detailed construction blueprints in a modern office setting",
    },
  ];

  return (
    <section
      id="services"
      className="bg-gray-50 section-container"
      aria-labelledby="services-heading"
    >
      <div className="text-center mb-20">
        <h2
          id="services-heading"
          className="text-section lg:text-display-md font-semibold text-black mb-6"
        >
          Our Services
        </h2>
        <p className="text-body text-gray-600 max-w-3xl mx-auto">
          Comprehensive construction solutions for both commercial and
          residential projects
        </p>
      </div>

      <div className="space-y-16">
        {services.map((service, index) => (
          <article
            key={index}
            className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center service-card group ${
              index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
            }`}
            aria-labelledby={`service-${index}-title`}
          >
            <div
              className={`${index % 2 === 1 ? "lg:col-start-2" : ""} px-4 lg:px-0`}
            >
              <div
                className="service-number mb-4"
                aria-label={`Service ${service.number}`}
              >
                {service.number}
              </div>
              <h3
                id={`service-${index}-title`}
                className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-black mb-6"
              >
                {service.title}
              </h3>
              <p className="text-body text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
            <div
              className={`${index % 2 === 1 ? "lg:col-start-1" : ""} px-4 lg:px-0`}
            >
              <img
                src={service.image}
                alt={service.imageAlt}
                className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105 focus:scale-105"
                loading="lazy"
                tabIndex={0}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
