import React from 'react';

const DownloadAppSection: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Manage Your Services by your Mobile Phone
        </h2>
        <p className="text-base sm:text-lg mb-8">
          Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="bg-white text-blue-900 font-semibold py-3 px-6 rounded-md hover:bg-gray-200 transition"
          >
            <img
              src="/appstore-logo.png"
              alt="Get it on App Store"
              className="h-8 inline-block"
            />
          </a>
          <a
            href="#"
            className="bg-white text-blue-900 font-semibold py-3 px-6 rounded-md hover:bg-gray-200 transition"
          >
            <img
              src="/googleplay-logo.png"
              alt="Get it on Google Play"
              className="h-8 inline-block"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;