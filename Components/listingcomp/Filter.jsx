"use client";
import React, { useState } from "react";
import {
  Select,
  SelectItem,
  Textarea,
  Slider,
  Button,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBathrooms,
  setBedrooms,
  setFilteredProperties,
  setLocation,
  setPriceRange,
  setPropertyType,
  setCity,
  setArea,
} from "@/redux/features/filterSlice";

const data = {
  propertyType: [
    { label: "Apartment", value: "Apartment" },
    { label: "Villa", value: "Villa" },
    { label: "House", value: "House" },
    { label: "Land", value: "Land" },
    { label: "Office", value: "Office" },
    { label: "Resale Properties", value: "Resale Properties" },
    { label: "Portuguese House", value: "Portuguese House" },
  ],
};

const Filter = ({ stateFunc }) => {
  const dispatch = useDispatch();
  const filterState = useSelector(state => state.filter);

  const { name, propertyType, priceRange, bedrooms, bathrooms, allProperties, city, area } = filterState;

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
          property.area.toLowerCase().includes(area.toLowerCase()) ||
          property.city.toLowerCase().includes(city.toLowerCase())
        )
      ) {
        return false;
      }

      if (priceRange.length === 2 && (property.price < minPrice || property.price > maxPrice)) {
        return false;
      }

      if (bedrooms.length === 2 && (property.bedrooms < bedrooms[0] || property.bedrooms > bedrooms[1])) {
        return false;
      }

      if (bathrooms.length === 2 && (property.bathrooms < bathrooms[0] || property.bathrooms > bathrooms[1])) {
        return false;
      }

      return true;
    });
    console.log(filtered)
    dispatch(setFilteredProperties(filtered)); // Update filtered properties in Redux state
  };
  const handleSubmit = () => {
    if (stateFunc) {
      stateFunc((e) => !e);
    }
    filterProperties()
    
  };
  return (
    <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow  pt-3 pb-12 leading-[150%] text-neutral-900 max-md:mt-6">
        <div className="text-base font-medium whitespace-nowrap">
          Property Type
        </div>
        <Select
          color="secondary"
          className=" text-black mt-1"
          label="Select Property Type"
          onSelectionChange={(e) => dispatch(setPropertyType(e.currentKey))}
        >
          {data.propertyType.map((e) => (
            <SelectItem className="text-black" key={e.value} value={e.value}>
              {e.label}
            </SelectItem>
          ))}
        </Select>

        <div className="mt-6 text-base font-medium">Location</div>
        <Textarea
          minRows={4}
          color="secondary"
          className="mt-2"
          placeholder="City, Street, Area"
          onChange={(e) => dispatch(setLocation(e.target.value))}
        />
        <Slider
          label="Price Range"
          color="secondary"
          step={5000}
          minValue={1000}
          maxValue={10000000}
          defaultValue={[50000, 6000000]}
          formatOptions={{ style: "currency", currency: "INR" }}
          className="max-w-md mt-4 font-medium"
          onChange={(e) => dispatch(setPriceRange(e))}
        />
        <Slider
          label="Bedrooms"
          color="secondary"
          step={1}
          minValue={0}
          maxValue={10}
          defaultValue={[2, 5]}
          className="max-w-md mt-4 font-medium"
          onChange={(e) => dispatch(setBedrooms(e))}
        />
        <Slider
          label="Bathrooms"
          color="secondary"
          step={1}
          minValue={0}
          maxValue={10}
          defaultValue={[2, 5]}
          className="max-w-md mt-4 font-medium"
          onChange={(e) => dispatch(setBathrooms(e))}
        />
        <Button
          onClick={() => handleSubmit()}
          color="secondary"
          className="mt-5"
        >
          Apply Filter
        </Button>
      </div>
    </div>
  );
};

export default Filter;
