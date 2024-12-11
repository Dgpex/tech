import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="min-h-80 border-t bg-gray-50">
      <div className="flex flex-wrap md:flex-nowrap justify-between px-6 py-10 md:px-16 md:py-14">
        {/* Logo and Social Section */}
        <div className="md:w-1/3 space-y-6">
          <h1 className="text-primary text-4xl font-semibold">Tech</h1>
          <div className="flex gap-4 text-gray-600 text-sm">
            <a href="#about" className="hover:text-primary">
              About
            </a>
            |
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
            |
            <a href="#careers" className="hover:text-primary">
              Careers
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="#facebook"
              className="border rounded-full p-2 hover:bg-primary hover:text-white"
            >
              <TiSocialFacebook className="text-2xl" />
            </a>
            <a
              href="#instagram"
              className="border rounded-full p-2 hover:bg-primary hover:text-white"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="#threads"
              className="border rounded-full p-2 hover:bg-primary hover:text-white"
            >
              <FaThreads className="text-2xl" />
            </a>
            <a
              href="#youtube"
              className="border rounded-full p-2 hover:bg-primary hover:text-white"
            >
              <FaYoutube className="text-2xl" />
            </a>
            <a
              href="#twitter"
              className="border rounded-full p-2 hover:bg-primary hover:text-white"
            >
              <FaXTwitter className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Quick Links, Support, and Company Info */}
        <div className="mt-10 md:mt-0 flex flex-wrap md:flex-nowrap md:w-2/3 gap-10 md:gap-16 justify-between">
          {/* Quick Links Section */}
          <div className="w-1/2 md:w-auto">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <ul className="mt-3 space-y-3 text-sm text-gray-600">
              <li>
                <a href="#about-us" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-primary">
                  Terms Of Service
                </a>
              </li>
              <li>
                <a href="#refund" className="hover:text-primary">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#buy-property" className="hover:text-primary">
                  Buy Property
                </a>
              </li>
            </ul>
          </div>

          {/* Our Support Section */}
          <div className="w-1/2 md:w-auto">
            <h3 className="text-lg font-semibold text-gray-800">Our Support</h3>
            <ul className="mt-3 space-y-3 text-sm text-gray-600">
              <li>
                <a href="#contact-us" className="hover:text-primary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#feedback" className="hover:text-primary">
                  User Feedback
                </a>
              </li>
              <li>
                <a href="#chat" className="hover:text-primary">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="#help-center" className="hover:text-primary">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-primary">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info Section */}
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold text-gray-800">Company Info</h3>
            <ul className="mt-3 space-y-3 text-sm text-gray-600">
              <li>
                <a href="#story" className="hover:text-primary">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#investor" className="hover:text-primary">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#press" className="hover:text-primary">
                  Press
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-primary">
                  Partners
                </a>
              </li>
              <li>
                <a href="#legal" className="hover:text-primary">
                  Legal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
