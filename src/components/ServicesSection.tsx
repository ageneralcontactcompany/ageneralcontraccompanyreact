import React from "react";

const ServicesSection: React.FC = () => {
  const services = [
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
  ];

  return (
    <section id="services" className="bg-gray-50 section-container">
      <div className="text-center mb-20">
        <h2 className="text-section lg:text-display-md font-semibold text-black mb-6">
          Our Services
        </h2>
        <p className="text-body text-gray-600 max-w-3xl mx-auto">
          Comprehensive construction solutions for both commercial and
          residential projects
        </p>
      </div>

      <div className="space-y-16">
        {services.map((service, index) => (
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
  );
};

export default ServicesSection;
