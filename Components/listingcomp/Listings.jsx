"use client";
import { setName } from "@/redux/features/filterSlice";
import { Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Property from "./Property";
import Filter from "./Filter";
import { setFilteredProperties } from "@/redux/features/filterSlice";
import { setCT } from "@/redux/features/currentTab";

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

const FilterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#000"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
    />
  </svg>
);

const Listings = () => {
  const dispatch = useDispatch();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const properties = useSelector((e) => e.filter.filteredProperties);
  const filterState = useSelector((state) => state.filter);
  const {
    name,
    propertyType,
    priceRange,
    bedrooms,
    bathrooms,
    allProperties,
    location,
  } = filterState;

  const filterProperties = () => {
    const filtered = allProperties.filter((property) => {
      const [minPrice, maxPrice] = priceRange.map((price) => parseInt(price));

      if (name && !property.name.toLowerCase().includes(name.toLowerCase())) {
        return false;
      }

      if (propertyType && property.propertyType !== propertyType) {
        return false;
      }

      if (
        location &&
        !(
          property.location.area
            .toLowerCase()
            .includes(location.toLowerCase()) ||
          property.location.city
            .toLowerCase()
            .includes(location.toLowerCase()) 
        )
      ) {
        return false;
      }

      if (
        priceRange.length === 2 &&
        (property.price < minPrice || property.price > maxPrice)
      ) {
        return false;
      }

      if (
        bedrooms.length === 2 &&
        (property.bedrooms < bedrooms[0] || property.bedrooms > bedrooms[1])
      ) {
        return false;
      }

      if (
        bathrooms.length === 2 &&
        (property.bathrooms < bathrooms[0] || property.bathrooms > bathrooms[1])
      ) {
        return false;
      }

      return true;
    });
    dispatch(setFilteredProperties(filtered)); // Update filtered properties in Redux state
  };
  const handleSubmit = () => {
    if (stateFunc) {
      stateFunc((e) => !e);
    }
    filterProperties();
  };

  useEffect(() => {
    filterProperties();
  }, [name]);



  return (
    <div className="relative">
      <div className="flex flex-col flex-1 ml-5  max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow pb-6 max-md:mt-6 max-md:max-w-full">
          <div className="justify-center items-start py-4 pr-16 pl-4 text-3xl font-bold tracking-tighter whitespace-nowrap text-neutral-900 max-md:pr-5 max-md:max-w-full">
            Explore Goa
          </div>
          <div className="flex gap-2 px-4 mt-3 max-md:max-w-full">
            <div
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex justify-center items-center lg:hidden"
            >
              <FilterIcon />
            </div>
            <Input
              color="secondary"
              value={name}
              placeholder="Search for properties in Goa..."
              onValueChange={(e) => {
                dispatch(setName(e));
              }}
              startContent={<SearchIcon />}
            />
          </div>
          <div className="mt-8 px-4 text-2xl font-bold tracking-tight text-neutral-900 max-md:max-w-full">
            Featured Listings
          </div>
          <div className="flex flex-col px-4 py-4 mt-3 max-md:max-w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-full">
              {properties.map((property, index) => (
                <Property key={index} property={property} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden min-h-screen absolute top-0 bg-purple-50 w-full transition-all  duration-300 ease-in-out overflow-hidden ${
          isFilterOpen ? "max-w-full" : "max-w-0"
        }`}
      >
        <Filter stateFunc={setIsFilterOpen} />
      </div>
    </div>
  );
};

export default Listings;
