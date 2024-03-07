// ServiceSection.jsx
import React from "react";

const ServiceSection = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col justify-center p-4 mt-3 w-full bg-white max-w-[960px] max-md:max-w-full rounded-lg">
      <div className="justify-between max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col pr-5 text-sm text-stone-500 max-md:mt-4 max-md:max-w-full">
              <div className="mt-1 text-base font-bold text-neutral-900 max-md:max-w-full">
                {title}
              </div>
              <div className="leading-[150%] max-md:max-w-full">
                {description}
              </div>

              {/* Add more content here if needed */}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={imageUrl}
              alt={title}
              className="grow w-full aspect-[1.79] max-md:mt-4 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
