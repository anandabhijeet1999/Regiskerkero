import React from "react";

const services = ["Annual Compliance", "Payroll Services", "Company Formation"];

const ServicesMenu: React.FC = () => {
  return (
    <div className="fixed right-4 top-1/4 hidden md:flex flex-col space-y-4">
      {services.map((service, index) => (
        <button
          key={index}
          className="bg-white shadow-md px-4 py-2 rounded text-gray-800 hover:bg-gray-100"
        >
          {service}
        </button>
      ))}
    </div>
  );
};

export default ServicesMenu;
