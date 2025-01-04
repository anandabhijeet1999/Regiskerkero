import React from 'react';

const StatisticsSection: React.FC = () => {
  const stats = [
    { value: "1M+", label: "Customers" },
    { value: "12+", label: "Years of Excellence" },
    { value: "41+", label: "R&D Engineers" },
    { value: "78+", label: "Countries" },
    { value: "3287+", label: "Partners" },
    { value: "41+", label: "Awards Received" },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
      <div className="text-center mb-8">
        <p className="text-sm text-yellow-500 font-medium uppercase">
          Why Register Karo
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Some Numbers are Important
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-3xl sm:text-4xl font-bold text-gradient text-gray-600">
              {stat.value}
            </p>
            <p className="text-sm sm:text-base font-medium text-gray-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsSection;