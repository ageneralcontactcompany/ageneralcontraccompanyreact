import React from "react";

const StatisticsSection: React.FC = () => {
  const stats = [
    { number: "91", label: "Projects" },
    { number: "11", label: "States" },
    { number: "10", label: "Years" },
  ];

  return (
    <section className="section-container">
      <div className="grid md:grid-cols-3 gap-16 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-6xl lg:text-8xl font-bold text-brand-primary mb-4">
              {stat.number}
            </div>
            <div className="text-gray-600 font-medium tracking-widest uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;
