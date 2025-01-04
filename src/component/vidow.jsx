import React from 'react';
import Image from "next/image";
import Screen from "@/assites/screen.png";
const vido = () => {
  return (
    <section className="bg-blue-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Text Content */}
        <div className="text-white lg:w-1/2">
          <h3 className="text-3xl font-bold mb-4">Our Video Introductions</h3>
          <p className="text-gray-300 mb-6">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>
          <div className="space-y-6">
            {/* Point 1 */}
            <div className="flex items-start">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Explore ideas together</h4>
                <p className="text-gray-300">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
            {/* Point 2 */}
            <div className="flex items-start">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                <i className="fas fa-comments"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Bring those ideas to life</h4>
                <p className="text-gray-300">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Video Content */}
        <div className="lg:w-1/2">
          <div className="relative w-full h-64 lg:h-80">
            <Image
              className="rounded-lg shadow-lg object-cover w-full h-full"
              src={Screen}
              alt="Video Introduction"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className=" bg-red-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg hover:scale-110 transform transition">
                <i className="fas fa-play"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default vido