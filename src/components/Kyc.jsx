import React from "react";
import image from "/kyc.png";

function Kyc() {
  return (
    <div className="py-16">
      <div className="flex bg-background rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="relative hidden lg:block lg:w-1/2 bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}
        </div>

        {/* Form Section */}
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-3xl font-semibold text-primary text-center">
            KYC
          </h2>
          <p className="text-xl text-center">Complete your Profile</p>

          {/* Pan Field */}
          <div className="mt-4">
            <label className="block text-sm font-bold mb-2">PAN Number</label>
            <input
              className="focus:outline-none focus:shadow-outline rounded py-2 px-4 block w-full appearance-none"
              type="text"
            />
          </div>

          {/* PAN Card Upload */}
          <div className="mt-4">
            <label className="block text-sm font-bold mb-2">PAN Card</label>
            <input
              className="focus:outline-none  bg-white focus:shadow-outline rounded py-2 px-4 block w-full appearance-none"
              type="file"
              accept=".jpg, .jpeg, .png, .pdf"
            />
          </div>
          {/* Aadhar Field */}
          <div className="mt-4">
            <label className="block text-sm font-bold mb-2">
              Aadhar Number
            </label>
            <input
              className="focus:outline-none focus:shadow-outline rounded py-2 px-4 block w-full appearance-none"
              type="text"
            />
          </div>
          {/* Aadhar Card Upload */}
          <div className="mt-4">
            <label className="block text-sm font-bold mb-2">Aadhar Card</label>
            <input
              className="focus:outline-none bg-white focus:shadow-outline rounded py-2 px-4 block w-full appearance-none"
              type="file"
              accept=".jpg, .jpeg, .png, .pdf"
            />
          </div>

          <div className="mt-8">
            <button className="bg-primary text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kyc;
