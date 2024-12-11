import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "/img1.jpg";
import img2 from "/img2.jpg";
import img3 from "/img3.jpg";
import img4 from "/img4.jpg";
const properties = [
  {
    title: "Cozy 2-Bedroom Apartment",
    location: "Downtown, City Center",
    price: "₹ 350,000",
    description:
      "This 2-BHK apartment is perfect for small families, located in the heart of the city with easy access to shops, schools, and parks.",
    imageUrl: img1,
  },
  {
    title: "Modern Studio Apartment",
    location: "Uptown, Riverside",
    price: "₹ 250,000",
    description:
      "A sleek and modern studio apartment ideal for singles, located near the riverfront and close to public transport.",
    imageUrl: img2,
  },
  {
    title: "Spacious 3-Bedroom House",
    location: "Suburbia, Green Valley",
    price: "₹ 450,000",
    description:
      "A spacious 3-bedroom house with a large backyard, located in a quiet neighborhood with excellent schools nearby.",
    imageUrl: img3,
  },
  {
    title: "Spacious 3-Bedroom House",
    location: "Suburbia, Green Valley",
    price: "₹ 450,000",
    description:
      "A spacious 3-bedroom house with a large backyard, located in a quiet neighborhood with excellent schools nearby.",
    imageUrl: img4,
  },
];

function Listing() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    const propertyId = 1;
    navigate(`/property/${propertyId}`);
  };
  return (
    <div className="min-h-screen p-10">
      {/* Grid layout with 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {properties.map((property, index) => (
          <div key={index} className="rounded-lg w-full bg-background">
            {/* Image Section */}
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                className="rounded-t-lg w-full h-56 object-cover"
                src={property.imageUrl}
                alt={property.title}
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>

            {/* Card Content */}
            <div className="p-4">
              <h5 className="mb-2 text-lg font-medium ">{property.title}</h5>

              {/* Location and Price */}
              <p className="text-sm ">
                <span className="font-semibold text-primary">Location:</span>{" "}
                {property.location}
              </p>
              <p className="text-lg font-semibold text-primary  mt-3">
                {property.price}
              </p>

              <p className="mb-3 text-sm mt-3">{property.description}</p>

              {/* Buy Now Button */}
              <div className="flex">
                <button
                  type="button"
                  onClick={handleRedirect}
                  className="text-white inline-block mt-2 rounded bg-primary px-8 py-2 text-xs font-medium uppercase leading-normal shadow-lg hover:bg-primary-600 transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-primary-700"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listing;
