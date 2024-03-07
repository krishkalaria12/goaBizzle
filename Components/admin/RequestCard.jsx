import React from "react";

const RequestCard = ({ property, onAccept, onReject }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md my-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex justify-center items-center">
          <div className="h-64 w-full">
            <img
              src={property.url[0]}
              alt={`Property ${property.id} Image 1`}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl text-black font-semibold">{property.name}</h2>
          <p className="text-gray-700 mb-2">{property.propertyType}</p>
          <p className="text-gray-700 mb-2">
            {property.city}, {property.area}, {property.pincode}
          </p>
          <p className="text-gray-700 mb-4">{property.description}</p>
          <p className="text-gray-700 mb-2">Price: ${property.price}</p>
          <p className="text-gray-700 mb-2">Bedrooms: {property.bedrooms}</p>
          <p className="text-gray-700 mb-2">Bathrooms: {property.bathrooms}</p>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Contact Details</h3>
        <p className="text-gray-700 mb-2">{property.username}</p>
        <p className="text-gray-700 mb-2">{property.email}</p>
        <p className="text-gray-700">{property.phone}</p>
      </div>
      <div className="flex justify-between p-4">
        <button
          onClick={() => onAccept(property.$id)}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Accept
        </button>
        <button
          onClick={() => onReject(property.$id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
