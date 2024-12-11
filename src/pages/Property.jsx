import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "/img1.jpg";
import img2 from "/img2.jpg";
import img3 from "/img3.jpg";
import img4 from "/img4.jpg";
import Area from "/Area.png";
import map1 from "/map1.png";

function Property() {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate("/property/selection");
  };

  const [selectedSections, setSelectedSections] = useState([]);
  const totalSections = 18;
  const soldSections = [1, 11];

  const handleSectionClick = (index) => {
    if (soldSections.includes(index)) return;

    if (selectedSections.includes(index)) {
      setSelectedSections(
        selectedSections.filter((section) => section !== index)
      );
    } else {
      setSelectedSections([...selectedSections, index]);
    }
  };

  const totalSqft = selectedSections.length * 50;
  const totalAmount = selectedSections.length * 5000;

  const galleryImages = [img1, img2, img3, img4];
  const [activeImage, setActiveImage] = useState(img1); // Default active image

  return (
    <div className="relative bg-gray-100">
      <div>
        <div className="flex">
          <div className="w-3/4 p-8 pb-0">
            {/* Gallery Section */}
            <div className="bg-white shadow-md rounded-lg p-8 flex">
              {/* Large Image */}
              <div className="w-3/4 mb-4">
                <img
                  src={activeImage}
                  alt="Active Image"
                  className="w-full h-96 ml-10 object-cover rounded-lg"
                />
                <div className="ml-8 mt-5">
                <h1 className="text-2xl font-bold text-primary">Modern Studio Apartment</h1>
                <h1>Location: Uptown, Riverside</h1>
                <h1>Price - ₹ 250,000</h1>
                <h1>
                  A sleek and modern studio apartment ideal for singles, located
                  near the riverfront and close to public transport.
                </h1></div>
              </div>

              {/* Thumbnail Images on the right */}
              <div className="flex flex-col justify-start ml-20">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="mb-5 cursor-pointer"
                    onClick={() => setActiveImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="h-20 w-20 object-cover rounded-lg hover:opacity-75"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="w-1/4 p-8 bg-white shadow-md rounded-lg mt-8">
            <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
            <div className="space-y-4">
              <div>
                <strong>One Square Feet Price:</strong> ₹1600
              </div>
              <div>
                <strong>Total Plot Area:</strong> 696,000 sqft
              </div>
              <div>
                <strong>Available Land Area:</strong> 695,927 sqft
              </div>
              <div>
                <strong>Quantity:</strong> 1 + Area Per Quantity: 2 sqft
              </div>
              <div>
                <strong>Immediate Capital Appreciation:</strong> 48% (As per
                deferred agreement)
              </div>
              <div>
                <strong>Total Price:</strong> ₹3200
              </div>
              <div>
                <strong>Earn Monthly:</strong> ₹128
              </div>
              <button className="bg-primary text-white w-full py-2 rounded-lg mt-4">
                Pay Now
              </button>
            </div>
          </div>
        </div>

        <div className="p-8 pt-0">
          <div className="bg-white shadow-md rounded-lg p-8 mt-6 w-3/4">
            <h2 className="text-2xl font-bold mb-4 text-custom-blue">
              Investment Thesis
            </h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">
                Only Superior Medical Facility
              </h3>
              <p>
                The tenant is a leading multi-specialty hospital boasting 315
                beds in the area within a 20 km radius.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Great Connectivity</h3>
              <p>
                The asset is located on the Bangalore-Krishnagiri bypass road
                and is well connected to major industrial hubs and upcoming
                townships.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8 mt-6 w-3/4">
            <h2 className="text-2xl font-bold mb-4 text-custom-blue">
              Overview
            </h2>
            <p>
              This is an opportunity to invest in a premier, healthcare growth
              asset in Hosur, Tamil Nadu. The location of the asset is
              accessible to major industrial hubs and upcoming townships.
            </p>
            <p className="mt-4">
              The area around the asset is a mixed-economy locality, primarily
              residential but with commercial establishments and some industrial
              pockets along the service road.
            </p>
            <p className="mt-4">
              Strategically located within a 50 km radius of Bangalore,
              Krishnagiri, and Attibele, the property Is 1.5 km from NH44 which
              provides access to the mentioned nearby districts. The Governments
              of Karnataka and Tamil Nadu have also proposed to extend the
              upcoming yellow line of BMRCL (Bangalore Metro Rail Corporation)
              up to Hosur.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8 mt-6 w-3/4">
            <h2 className="text-2xl font-bold mb-4 text-custom-blue">
              Area Available
            </h2>
            <div className="w-full flex flex-col items-center">
              <div className="grid grid-cols-5 gap-1 p-2 rounded-lg w-full">
                {Array.from({ length: totalSections }).map((_, index) => (
                  <div
                    key={index}
                    className={`border p-8 text-center font-bold cursor-pointer
            ${
              selectedSections.includes(index)
                ? "bg-green-500 text-white"
                : "bg-white text-gray-700"
            }
            ${
              soldSections.includes(index)
                ? "bg-red-500 text-white cursor-not-allowed"
                : "hover:bg-gray-200"
            }
            transition-colors rounded-lg`}
                    title={soldSections.includes(index) ? "Sold" : "Available"}
                    onClick={() => handleSectionClick(index)}
                  >
                    {soldSections.includes(index) ? "Sold" : `${index + 1}`}
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <img src={Area} alt="" className="" />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8 mt-6 mb-6 w-3/4">
            <h2 className="text-2xl font-bold mb-4 text-custom-blue">
              Location
            </h2>
            <p>
              The area around the property is a mixed-economy locality,
              primarily residential but with commercial establishments and some
              industrial pockets along the service road.
            </p>

            <div className="flex  mt-4">
              <div className="flex justify-center">
                <div>
                  <p className="font-bold text-custom-blue">Accessibility</p>
                  <p className="text-xs">Banglore - 50 Kms</p>
                  <p className="text-xs">Krishnagiri - 50 kms</p>
                  <p className="text-xs">Attibele - 50 kms</p>
                </div>
              </div>
              <img src={map1} alt="Map" className="w-96 ml-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
