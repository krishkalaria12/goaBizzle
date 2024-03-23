"use client";
import Navbar from "@/Components/Navbar";
import NotFound from "@/app/not-found";
import ImageSlider from "@/Components/property/ImageSlider";
import { getProduct } from "@/actions/getProduct";
import { setCT } from "@/redux/features/currentTab";
import React, { useEffect, useState } from "react";
import { FaMailBulk, FaPhone, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";

const PropertyPage = ({ params }) => {
//params.id will give the id of the property, fetch the details of the property from the id and assign it to property variable

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const [property, setProperty] = useState();
    const [wrongSlug, setWrongSlug] = useState();
    const propertyId = params.id;

    useEffect(()=>{
        dispatch(setCT("listings"));
        fetchProductThroughServer();
    },[])

      const fetchProductThroughServer = async () => {
        try {
          const { data, wrongSlug } = await getProduct(propertyId);
          if (data) {
            setProperty(data)
          }
          setWrongSlug(wrongSlug);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }
      
    if (wrongSlug) {
      return <NotFound />;
    }

    if (loading) {
      return <h1 className="flex justify-center items-center text-3xl font-bold min-h-screen">Loading</h1>
    }

  return (
    property!=null && (<div className="flex flex-col justify-center bg-purple-50">
      <div className="flex flex-col items-center pb-5 w-full bg-white max-md:max-w-full">
        <Navbar />
        <div className="flex flex-col px-4 mt-24 w-full max-w-[960px] max-md:max-w-full ">
          <ImageSlider imageUrls={property.url}/>
          <div className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 max-md:max-w-full">
            {property.name}
          </div>
          <div className="mt-4 text-sm leading-5 text-stone-500 max-md:max-w-full">
            {property.area},{property.city},{property.state}
          </div>
        </div>
        <div className="justify-center p-4 mt-3 w-full max-w-[960px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-4 text-sm leading-5 border-t border-gray-200 border-solid max-md:mt-4 max-md:max-w-full">
                <div className="text-stone-500 max-md:max-w-full">Area</div>
                <div className="mt-1 text-neutral-900 max-md:max-w-full">
                  {property.sqft}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-4 text-sm leading-5 border-t border-gray-200 border-solid max-md:mt-4 max-md:max-w-full">
                <div className="text-stone-500 max-md:max-w-full">Rooms</div>
                <div className="mt-1 text-neutral-900 max-md:max-w-full">
                  {property.bedrooms} BHK
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 mt-1 w-full max-w-[960px] text-neutral-900 max-md:max-w-full">
          <div className="text-base leading-6 max-md:max-w-full">
            {property.description}
          </div>
          
        </div>
        
        <div className="flex flex-col self-start mt-5 ml-44 text-2xl font-bold tracking-tight whitespace-nowrap text-neutral-900 max-md:ml-2.5">
          <div>Price</div>
          <div className="mt-7 text-lg tracking-tight">{property.price} INR</div>
          <div className="mt-7">Contact</div>
        </div>
        <div className="flex flex-col justify-center px-4 py-2 mt-3 w-full bg-white leading-[150%] max-w-[960px] max-md:max-w-full">
          <div className="flex gap-4 pr-20 max-md:flex-wrap max-md:pr-5">
            <FaUser/>
            <div className="flex flex-col justify-center my-auto">
              <div className="text-base font-medium whitespace-nowrap text-neutral-900">
                {property.userName}
              </div>
              <div className="text-sm text-stone-500">Property agent</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-4 py-3 w-full bg-white max-w-[960px] max-md:max-w-full">
          <div className="flex gap-4 pr-20 max-md:flex-wrap max-md:pr-5">
            <div className="flex justify-center items-center px-3 w-12 h-12 rounded-lg bg-stone-100">
              <FaPhone/>
            </div>
            <div className="flex flex-col justify-center self-start whitespace-nowrap leading-[150%]">
              <div className="text-base font-medium text-neutral-900">
                {property.phonenumber}
              </div>
              <div className="text-sm text-stone-500">Call or message</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-4 py-3 w-full bg-white max-w-[960px] max-md:max-w-full">
          <div className="flex gap-4 pr-20 max-md:flex-wrap max-md:pr-5">
            <div className="flex justify-center items-center px-3 w-12 h-12 rounded-lg bg-stone-100">
              <FaMailBulk/>
            </div>
            <div className="flex flex-col justify-center self-start whitespace-nowrap leading-[150%]">
              <div className="text-base font-medium text-neutral-900">
                {property.email}
              </div>
              <div className="text-sm text-stone-500">Email</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default PropertyPage;
