"use client"
import React, { useEffect } from "react";
import Navbar from "@/Components/Navbar";
import { useDispatch } from "react-redux";
import { setCT } from "@/redux/features/currentTab";

const AboutUs = () => {
        const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setCT("aboutus"))
    },[])
  return (
    <div className="min-h-screen bg-purple-50 text-black ">
      <Navbar />
      <div className="container mx-auto  pt-20">
        <img
          src="https://santorinidave.com/wp-content/uploads/2023/03/goa-good-beach-weather.jpeg"
          className="object-cover w-full h-72"
        />
        <h1 className="text-3xl font-bold text-center my-6">About Us</h1>
        <p className="text-lg text mb-8 px-20">
          Goabizzle is a Real Estate firm specialising in buying and selling
          properties in the State of Goa-India. We deal in exclusive high end
          properties, portuguese houses, apartments, villas, resale, commerical,
          land & rentals. We have extensive knowledge in buying and selling
          homes and we believe that knowing and analysing the market place is a
          continuous learning process thereby giving us a competitive edge - the
          icing on the cake being that we do not charge any commission to the
          buyer.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
