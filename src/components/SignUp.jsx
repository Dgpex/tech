import React from "react";
import image from "/signup.jpg";
import { Link } from "react-router-dom"; 

function SignUp() {
  return (
    <div className="py-16">
      <div className="flex bg-background rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="relative hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: `url(${image})` }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Form Section */}
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-3xl font-semibold text-primary text-center">
            Sign Up
          </h2>
          <p className="text-xl text-center">Create your account</p>

          {/* Name Field */}
          <div className="mt-4">
            <label className="block text-sm font-bold mb-2">Name</label>
            <input
              className="focus:outline-none focus:shadow-outline rounded py-2 px-4 block w-full appearance-none"
              type="text"
            />
          </div>

          {/* Phone Number Field */}
          <div className="mt-4">
            <label className="block text-sm font-bold mb-2">Phone Number</label>
            <input
              className="focus:outline-none focus:shadow-outline rounded py-2 px-4 block w-full appearance-none"
              type="tel"
            />
          </div>

          {/* Email Field */}
          <div className="mt-4">
            <label className="block text-sm font-bold mb-2">Email Address</label>
            <input
              className="focus:outline-none focus:shadow-outline rounded py-2 px-4 block w-full appearance-none"
              type="email"
            />
          </div>

          {/* Address Field */}
          <div className="mt-4">
            <label className="block text-sm font-bold mb-2">Address</label>
            <textarea
              className="focus:outline-none focus:shadow-outline rounded py-2 px-4 block w-full appearance-none"
              rows="3"
            ></textarea>
          </div>

          {/* Password Field */}
          <div className="mt-4">
            <label className="block text-sm font-bold mb-2">Password</label>
            <input
              className="focus:outline-none focus:shadow-outline rounded py-2 px-4 block w-full appearance-none"
              type="password"
            />
          </div>
          <div className="mt-8">
            <Link to="/kyc">
              <button className="bg-primary text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                Sign Up
              </button>
            </Link>
          </div>

          <div className="mt-5 text-end">
            <a href="/login" className="text-primary text-xs">
              Already have an account?
              <span className="font-bold hover:underline"> Login</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
