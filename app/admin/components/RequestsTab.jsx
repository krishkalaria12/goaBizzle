import React from "react";
import RequestCard from "./RequestCard";

const requests = [
  {
    id: 1,
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0a1aYjay11YJHYmqFrIJaK1gIyW24SC2IQ&usqp=CAUrl3",
    ],
    user: {
      fullName: "Aswin Raaj P S",
      email: "aswinraaj@gmail.com",
      phoneNumber: "+911234567890",
    },
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
    user: {
      fullName: "Aswin Raaj P S",
      email: "aswinraaj@gmail.com",
      phoneNumber: "+911234567890",
    },
  },
];

const RequestsTab = () => {
  return (
    <div className="p-2 h-full overflow-scroll">
      <h1 className="text-black font-semibold text-xl">Manage Requests</h1>
      <div>
        {
            requests.map((req) => <RequestCard property={req}/>)
        }
      </div>
    </div>
  );
};

export default RequestsTab;
