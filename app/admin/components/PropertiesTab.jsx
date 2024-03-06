import React from "react";
import PropertyCard from "./PropertyCard";
import { useRouter } from "next/navigation";

const property = [
  {
    id: 2,
    name: "Property 2",
    propertyType: "House",
    city: "New York",
    area: "Manhattan",
    pincode: "10001",
    description: "Beautiful house in the heart of the city.",
    price: 1000000,
    bedrooms: 3,
    bathrooms: 2,
    imageUrls: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0a1aYjay11YJHYmqFrIJaK1gIyW24SC2IQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0a1aYjay11YJHYmqFrIJaK1gIyW24SC2IQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0a1aYjay11YJHYmqFrIJaK1gIyW24SC2IQ&usqp=CAU",
    ],
  },
  {
    id: 2,
    name: "Property 2",
    propertyType: "House",
    city: "New York",
    area: "Manhattan",
    pincode: "10001",
    description: "Beautiful house in the heart of the city.",
    price: 1000000,
    bedrooms: 3,
    bathrooms: 2,
    imageUrls: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0a1aYjay11YJHYmqFrIJaK1gIyW24SC2IQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0a1aYjay11YJHYmqFrIJaK1gIyW24SC2IQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0a1aYjay11YJHYmqFrIJaK1gIyW24SC2IQ&usqp=CAU",
    ],
  },
  {
    id: 2,
    name: "Property 2",
    propertyType: "House",
    city: "New York",
    area: "Manhattan",
    pincode: "10001",
    description: "Beautiful house in the heart of the city.",
    price: 1000000,
    bedrooms: 3,
    bathrooms: 2,
    imageUrls: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0a1aYjay11YJHYmqFrIJaK1gIyW24SC2IQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0a1aYjay11YJHYmqFrIJaK1gIyW24SC2IQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0a1aYjay11YJHYmqFrIJaK1gIyW24SC2IQ&usqp=CAU",
    ],
  },
];

const PropertiesTab = () => {
    const router = useRouter();
  return (
    <div className="p-2 h-full overflow-scroll">
      <div className="p-3 flex justify-between items-center">
        <h1 className="text-black font-semibold text-xl">Manage Properties</h1>
        <button onClick={() => router.push("/admin/addproperty")} className="text-purple-600 font-semibold bg-purple-200 rounded px-4 py-2 ">
          Add Property
        </button>
      </div>
      <div>
        {
            property.map((prop) => <PropertyCard property={prop}/>)
        }
      </div>
    </div>
  );
};

export default PropertiesTab;
