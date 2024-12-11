import React from 'react';
import { FaRocket, FaRegHandshake, FaGavel, FaRegPaperPlane } from 'react-icons/fa';

function WhyChooseSection() {
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Why Choose <span className="text-primary">TECH</span>?
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          This shift simplifies the process of connecting the right buyers with the right sellers and <br /> vice versa,
          creating a more accessible and rewarding experience for all participants.
        </p>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 lg:gap-y-10 lg:gap-x-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl text-center">
            <div className="flex justify-center mb-4">
              <FaRocket size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexibility & Accessibility</h3>
            <p className="text-gray-600">
              Our platform offers flexibility and easy access to users from all backgrounds.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl text-center">
            <div className="flex justify-center mb-4">
              <FaRegHandshake size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Support</h3>
            <p className="text-gray-600">
              We offer 24/7 professional support to assist you throughout your journey.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl text-center">
            <div className="flex justify-center mb-4">
              <FaGavel size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Legal Compliance</h3>
            <p className="text-gray-600">
              <span className="text-primary">Tech</span> ensures all transactions are legally compliant and secure.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl text-center">
            <div className="flex justify-center mb-4">
              <FaRegPaperPlane size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Regular Updates</h3>
            <p className="text-gray-600">
              Stay informed with regular updates on property exchanges and policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseSection;
