"use client"
import React from "react";
import Image from "next/image";
import HomePageBG from "../assets/homepage_bg.png";
import { useRouter } from "next/navigation";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

const Banner = () => {
    const router = useRouter();
  return (
    <div className="flex flex-col px-4 mt-20  w-full max-w-[960px] max-md:max-w-full">
      <div className="flex overflow-hidden relative flex-col justify-end items-center px-16 pt-4 rounded-xl h-1/2 lg:min-h-[480px] max-md:px-5 max-md:max-w-full">
        <Image
          src={HomePageBG}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col justify-center px-4 py-12 max-w-full w-[667px]">
          <div className="mt-28 text-5xl font-extrabold tracking-tighter text-center text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Find your dream home in Goa
          </div>
          <div onClick={()=>{router.push("/listings")}} className="flex gap-0 self-center  mt-8 mb-16 text-base leading-6 bg-white rounded-xl max-md:flex-wrap max-md:mb-10 max-md:max-w-full text-black relative">
            <input
              placeholder="Search for properties"
              className="h-full w-48 md:w-72 focus:outline-none py-3 md:pr-10 pl-10 rounded-lg"
            />
            <div className="absolute top-2 left-2">
              <SearchIcon />
            </div>
            <div>
            <div className="justify-center md:block hidden bg-orange-400 rounded-md px-2 py-1 relative top-1.5 right-2 aspect-[2.38]">
                    Search
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
