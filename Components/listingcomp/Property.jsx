import React from "react";

const Property = ({ property }) => {
  const { name, city, area, price, bedrooms, bathrooms, imageUrl, key } = property;

  return (
    <div key={key} className="flex flex-col flex-1 pb-9">
      <img
        loading="lazy"
        srcSet={imageUrl}
        className="self-center w-full h-48 rounded object-cover"
        alt={name}
      />
      <div className="mt-3 text-base font-medium leading-6 text-neutral-900">
        {`${name} - ${price} - ${bedrooms}BR/${bathrooms}BA`}
      </div>
      <div className="text-sm leading-5 text-stone-500">{`${area}, ${city}`}</div>
    </div>
  );
};

export default Property;
