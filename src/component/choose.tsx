import React from 'react'

const choose = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-orange-500 uppercase">
            Why RegisterKaro.in
          </h3>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Why Choose Register Karo
          </h2>
          <p className="mt-4 text-gray-600">
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-red-50 rounded-lg shadow">
            <div className="text-orange-500 text-4xl mb-4">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h4 className="text-lg font-semibold text-gray-800">
              Confidential & Safe
            </h4>
            <p className="mt-2 text-gray-600">
              All your private information is safe with us.
            </p>
          </div>
          {/* Card 2 */}
          <div className="p-6 bg-green-50 rounded-lg shadow">
            <div className="text-green-500 text-4xl mb-4">
              <i className="fas fa-check-circle"></i>
            </div>
            <h4 className="text-lg font-semibold text-gray-800">
              No Hidden Fee
            </h4>
            <p className="mt-2 text-gray-600">
              Everything is put before you with no hidden charges or conditions.
            </p>
          </div>
          {/* Card 3 */}
          <div className="p-6 bg-blue-50 rounded-lg shadow">
            <div className="text-blue-500 text-4xl mb-4">
              <i className="fas fa-smile"></i>
            </div>
            <h4 className="text-lg font-semibold text-gray-800">
              Guaranteed Satisfaction
            </h4>
            <p className="mt-2 text-gray-600">
              We ensure that you stay 100% satisfied with our offered services.
            </p>
          </div>
          {/* Card 4 */}
          <div className="p-6 bg-pink-50 rounded-lg shadow">
            <div className="text-pink-500 text-4xl mb-4">
              <i className="fas fa-user-tie"></i>
            </div>
            <h4 className="text-lg font-semibold text-gray-800">
              Expert CA/CS Assistance
            </h4>
            <p className="mt-2 text-gray-600">
              Prompt support from our in-house expert professionals.
            </p>
          </div>
          {/* Card 5 */}
          <div className="p-6 bg-red-50 rounded-lg shadow">
            <div className="text-orange-500 text-4xl mb-4">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h4 className="text-lg font-semibold text-gray-800">
              Confidential & Safe
            </h4>
            <p className="mt-2 text-gray-600">
              All your private information is safe with us.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default choose
