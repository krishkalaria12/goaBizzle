"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const FeaturedProperties = ({properties}) => {

    const router = useRouter();
  

  return (
    <div className="p-4 mt-3 w-full max-w-[960px] max-md:max-w-full">
      <div className="text-2xl font-bold tracking-tight text-neutral-900">
        Featured Properties
      </div>
      <div className="grid grid-cols-1 gap-5 mt-5 justify-center sm:grid-cols-2 lg:grid-cols-4">
        {properties.map((property, index) => (
          <div onClick={()=>router.push(property.href)} key={index} className="flex flex-col  ">
            <div className="flex flex-col pb-3">
              <img loading="lazy" src={property.image} className="w-full h-48 object-cover rounded-lg" alt={property.title} />
              <div className="mt-3 text-base font-medium text-neutral-900">{property.title}</div>
              <div className="text-sm text-stone-500">{property.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
