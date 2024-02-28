import React from "react";



const Testimonials = ({testimonials}) => {
  return (
    <div className="p-4 mt-5 w-full max-w-[960px] max-md:max-w-full">
      <div className="text-2xl font-bold tracking-tight text-neutral-900">
        What our clients say
      </div>
      <div className="flex flex-wrap gap-3 py-3 pr-4 pl-3 mt-3 max-w-full text-sm font-medium leading-5 whitespace-nowrap text-neutral-900">
        <div className="rounded-xl bg-white px-4 py-1.5">
          Beautiful property
        </div>
        <div className="rounded-xl bg-white px-4 py-1.5">
          Great location
        </div>
        <div className="rounded-xl bg-white px-4 py-1.5">
          Excellent service
        </div>
        <div className="rounded-xl bg-white px-4 py-1.5">
          Highly recommended
        </div>
        <div className="rounded-xl bg-white px-4 py-1.5">
          Very professional
        </div>
      </div>
      <div className="p-4 mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="max-w-[300px]">
            <div className="flex flex-col bg-white rounded-lg border border-solid border-stone-200 px-4 h-full pt-4 pb-4">
              <div className="w-full flex justify-center">
                <img
                  loading="lazy"
                  src={testimonial.image}
                  className="w-10 aspect-square rounded-full"
                  alt={testimonial.name}
                />
              </div>
              <div className="mt-3 text-base font-bold text-neutral-900">
                {testimonial.text}
              </div>
              <div className="flex-1"></div>
              <div className=" mt-5 text-sm leading-5 text-stone-500">
                {testimonial.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
