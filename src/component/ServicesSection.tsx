import React from "react";

type Service = {
  title: string;
  description: string;
  icon: JSX.Element; // Allows passing an SVG or icon component
};

const services: Service[] = [
  {
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
    icon: (
      <svg
        className="w-10 h-10 text-orange-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13M8 13h8M4 18v-6a4 4 0 014-4h8a4 4 0 014 4v6"
        />
      </svg>
    ),
  },
  {
    title: "Company Secretarial Services",
    description:
      "Make data-driven decisions and utilize technology to reach business goals.",
    icon: (
      <svg
        className="w-10 h-10 text-orange-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M17 21h-2a2 2 0 01-2-2v-5a2 2 0 012-2h2a2 2 0 012 2v5a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Virtual Office Address",
    description:
      "Foster customer relationships by effectively serving your market.",
    icon: (
      <svg
        className="w-10 h-10 text-orange-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 9V7a4 4 0 00-8 0v2m5 11h-2a3 3 0 01-3-3v-4a3 3 0 013-3h2a3 3 0 013 3v4a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
  {
    title: "Annual Compliance Services",
    description: "Turn your ideas into modern products with our design experts.",
    icon: (
      <svg
        className="w-10 h-10 text-orange-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 12H4m16 0c0 4-4 8-8 8s-8-4-8-8m16 0c0-4-4-8-8-8s-8 4-8 8"
        />
      </svg>
    ),
  },
  {
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
    icon: (
      <svg
        className="w-10 h-10 text-orange-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v16m4-16v16m4-16v16m4-16v16m4-16v16"
        />
      </svg>
    ),
  },
  {
    title: "Bookkeeping Services",
    description:
      "Steering user behaviors with creative design, data insights & technology.",
    icon: (
      <svg
        className="w-10 h-10 text-orange-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 16h8m-4-4v4m0 0v4m4-8H8m8-4H8m8 0a4 4 0 00-8 0m8 0a4 4 0 01-8 0"
        />
      </svg>
    ),
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-orange-600 uppercase text-sm tracking-widest">
            Welcome to RegisterKaro.in
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Explore Our Services
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>

              {/* Learn More Link */}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Learn more &rarr;
              </a>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            See All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
