import React from 'react'

const PropertyCard = ({property}) => {
    const handleRemove = (id) => {
        //Remove from the database
    }
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md my-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex justify-center items-center">
          <div className="h-64 w-full">
            <img
              src={property.imageUrls[0]}
              alt={`Property ${property.id} Image 1`}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold">{property.name}</h2>
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
     
      <div className="flex justify-between p-4">
        <button
          onClick={() => {}}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Edit 
        </button>
        <button
          onClick={() => handleRemove(property.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default PropertyCard