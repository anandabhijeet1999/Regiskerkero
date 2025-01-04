// components/DigitalRealityForm.tsx
import React from "react";
import Kashis from "@/assites/kashis.png";
import Image from "next/image";
const DigitalRealityForm: React.FC = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 to-blue-800">
      <div className="text-center p-8 max-w-lg w-full bg-white rounded-lg shadow-lg">
        <h2 className="text-sm uppercase font-bold text-gray-600 tracking-wide">1% OF THE INDUSTRY</h2>
        <h1 className="text-3xl font-extrabold text-gray-800 mt-2 mb-4">
          Welcome to your new digital reality. Now.
        </h1>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-4 text-gray-600 text-sm">
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> Instant results
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> User-friendly interface
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✔</span> Personalized customization
          </div>
        </div>
      </div>
      
    </div>
    <div className="text-center  max-w-full w-full bg-white h-32 ">
    <Image src={Kashis} alt="Orocal"  className="m-10"/>
    </div>
    </>
  );
};

export default DigitalRealityForm;