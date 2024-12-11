import React from "react";
import image from "/img.webp";
import { Link } from "react-router-dom"; 

function Login() {
  return (
    <div className="py-16">
      <div className="flex bg-background rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 mt-10 bg-contain"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-3xl font-semibold text-primary text-center">
            Tech
          </h2>
          <p className="text-xl text-center">Welcome back!</p>
          <div className="mt-4">
            <label className="block text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className=" focus:outline-none focus:shadow-outline rounded py-2 px-4 block w-full appearance-none"
              type="email"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-sm font-bold mb-2">Password</label>
              <a href="#" className="text-xs">
                Forget Password?
              </a>
            </div>
            <input
              className="rounded focus:outline-none focus:shadow-outline py-2 px-4 block w-full appearance-none"
              type="password"
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <a href="#" className="text-xs uppercase">
              or With User ID
            </a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-sm font-bold mb-2">User ID</label>
              <a href="#" className="text-xs">
                Forget User ID?
              </a>
            </div>
            <input
              className="rounded focus:outline-none focus:shadow-outline py-2 px-4 block w-full appearance-none"
              type="text"
            />
          </div>
          <div className="mt-8">
          <Link to="/">

            <button className="bg-primary text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
              Login
            </button>
            </Link>
          </div>
          {/* <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <a href="#" className="text-xs uppercase">
              or sign up
            </a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div> */}
          <div className="mt-5 text-end">
          <a href="/signup" className="text-primary text-xs ">
            Don't have an account?
            <span className="font-bold hover:underline">Sign Up</span>
          </a></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
