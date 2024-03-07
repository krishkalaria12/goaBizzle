'use client'
import * as React from "react";
import Navbar from "@/Components/Navbar";
import { useDispatch } from "react-redux";
import { setCT } from "@/redux/features/currentTab";
import ServiceSection from "@/Components/services/ServiceSection";
import FAQSection from "@/Components/services/FAQSection";
import Footer from "@/Components/footer/Footer";

const services = [
    {
      title: 'Property Management',
      description:
        'Keep your property in top condition with our management services. We\'ll handle everything from maintenance to tenant screening, so you can relax and enjoy the returns.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0u3x5753QPRGh1Y753C8G1VrMUQJxdm3o4Dgw4yeTBvExikW774LG479ZcJB51-2EiB8&usqp=CAU',
    },
    {
      title: 'Home Buying and Selling',
      description:
        'Find your dream home with our expert team. We\'ll walk you through the process, from pre-approval to closing, so you can make your move with confidence.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0u3x5753QPRGh1Y753C8G1VrMUQJxdm3o4Dgw4yeTBvExikW774LG479ZcJB51-2EiB8&usqp=CAU',
    },
    {
        title: 'Legal Services',
        description: 'Navigate complex property laws with our experienced attorneys. From contract review to dispute resolution, we\'ll provide the guidance you need to protect your investment.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0u3x5753QPRGh1Y753C8G1VrMUQJxdm3o4Dgw4yeTBvExikW774LG479ZcJB51-2EiB8&usqp=CAU',
      },
      {
        title: 'Financing Options',
        description: 'Explore a range of loan products tailored to your needs. Our mortgage experts will help you find the best rates and terms, so you can secure your dream property with confidence.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0u3x5753QPRGh1Y753C8G1VrMUQJxdm3o4Dgw4yeTBvExikW774LG479ZcJB51-2EiB8&usqp=CAU',
      },
    // Add more services as needed
  ];

const ServicesPage = () => {
    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(setCT("services"))
    },[])
  return (
    <div className="flex flex-col justify-center bg-purple-50">
      <div className="flex flex-col items-center pb-5 w-full bg-purple-50 max-md:max-w-full">
        <Navbar/>
        <div className="flex  flex-col justify-center pt-4 pr-9 pb-10 pl-4 mt-20 w-full max-w-[960px] max-md:pr-5 max-md:max-w-full">
          <div className="text-4xl font-extrabold tracking-tighter text-neutral-900 max-md:max-w-full">
            Our Services
          </div>
          <div className="mt-3 text-base leading-6 text-stone-500 max-md:max-w-full">
            We&apos;re here to help you with every step of your property journey.
            Whether you&apos;re buying, selling, or looking for legal advice, we have
            the expertise to guide you through the process.
          </div>
        </div>
        {services.map((service, index) => (
        <ServiceSection
          key={index}
          title={service.title}
          description={service.description}
          imageUrl={service.imageUrl}
        />
      ))}
        <FAQSection/>
      </div>
    </div>
  );
}

export default ServicesPage

