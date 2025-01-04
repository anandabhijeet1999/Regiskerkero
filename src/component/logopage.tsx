import React from 'react'
import Image from "next/image";
import Text from "@/assites/text.png";
import Text1 from "@/assites/text1.png";
import Contact from "@/assites/contact.png";
import Contact1 from "@/assites/contact1.png";
  const logos = [
    "/assites/logos.png",
    "@/assites/photo.png",
  ];
const logopage = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-black">Our Happy Clients</h3>
        <p className="text-gray-600 mb-8">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state-of-the-art customer service.
        </p>
        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-full shadow-md p-4 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 hover:scale-105 transition transform"
            >
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
        {/* Show More Button */}
        <button className="mt-8 text-blue-600 font-semibold flex items-center space-x-2 hover:underline">
          <span>Show more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 h-32 bg-orange-300 flex items-center justify-around'>
      <Image src={Text} alt="Orocal" />
      <p>Fill up Application Form</p>
      <Image src={Text1} alt="Orocal" />
      <p>Get Confirm Mail</p>
      <Image src={Contact} alt="Orocal" />
      <p>Exective Will Process Application</p>
      <Image src={Contact1} alt="Orocal" />
      <p>Make Online Payment</p>
      </div>
    </section>

  );
};

export default logopage;
