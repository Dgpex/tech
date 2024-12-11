import React from "react";
import {
  FaHome,
  FaBuilding,
  FaLandmark,
  FaQuestionCircle,
} from "react-icons/fa";
import { MdVilla } from "react-icons/md";
import image from "/img.webp";

function Section1() {
  const categoryIcons = {
    Residential: <FaHome size={40} />,
    Commercial: <FaBuilding size={40} />,
    "Open Land": <FaLandmark size={40} />,
    Villas: <MdVilla size={40} />,
    Others: <FaQuestionCircle size={40} />,
  };

  return (
    <div className="bg-background min-h-screen relative">
      <div className="container px-4 lg:pl-40 text-center lg:text-left py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary mt-10">
          Discover Your Dream with <span className="text-primary">Tech</span>
        </h1>
        <p className="mt-2 text-gray-600">
          Connecting millions to seamless and reliable property solutions.
        </p>

        {/* Image positioned to the top-right */}
        {/* Image positioned to the top-right */}
        <img
          src={image}
          alt="Tech Property Exchange"
          className="hidden md:block h-auto mt-4 absolute top-5 right-10 lg:right-40 w-1/2 md:w-1/3 lg:w-1/4"
        />

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center mt-10 space-y-4 lg:space-y-0 lg:space-x-4">
          <button className="bg-primary text-white font-semibold py-2 px-6 rounded-md">
            View Properties
          </button>
          <button className="border border-primary text-primary py-2 px-6 rounded-md">
            Learn More
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center lg:justify-start mx-4 lg:mx-40 gap-10 lg:gap-20 mt-8">
        {["Residential", "Commercial", "Open Land", "Villas", "Others"].map(
          (category) => (
            <div key={category} className="text-center w-24 md:w-32">
              {/* Icon below the category text */}
              <div className="flex justify-center mt-4 mb-2">
                <div className="bg-white rounded-full p-4 text-primary hover:text-white hover:bg-primary">
                  {categoryIcons[category]}
                </div>
              </div>

              {/* Category Text */}
              <span className="font-extralight text-sm md:text-base">
                {category}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Section1;
