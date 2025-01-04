import React from 'react'
import Image from "next/image";
import Group from "@/assites/group.png";
const about = () => {
  return (
    <section className="px-6 lg:px-40 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-orange-500 uppercase text-sm font-semibold tracking-widest">
            Welcome to RegisterKaro.in
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-4">
            About <span className="text-orange-500">Register Karo</span>
          </h2>
          <p className="text-gray-600 mt-6 leading-relaxed">
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years and I’m
            extremely pleased with their performance, ability to execute, and
            willingness to adapt in our ever-changing environment.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Perry is an outstanding leader who is fanatical about customer
            satisfaction. He has built a solid team which has consistently
            delivered on projects thereby exceeding everyone’s expectations.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            I would strongly recommend their services to any organization that
            is looking for solid, reliable, and predictable outcomes.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition">
            Learn More →
          </button>
        </div>

        {/* Right Content (Image) */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-full overflow-hidden rounded-xl">
            <Image
              src={Group}
              alt="Team"
              layout="responsive"
              width={800}
              height={600}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

  );
}

export default about