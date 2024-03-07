"use client"
import * as React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/footer/Footer";
import Banner from "@/Components/Banner";
import FeaturedProperties from "@/Components/featuredProperties/FeaturedProperties";
import Testimonials from "@/Components/testimonials/Testimonials";
import { useDispatch } from "react-redux";
import { setCT } from "@/redux/features/currentTab";

// Sample data for properties (replace it with your actual data)
const sampleJSONdata = {
  featuredProperties: [
    {
      image: "https://static.toiimg.com/img/104753278/Master.jpg",
      title: "Luxury 2 BHK Villa",
      price: "$2000/month",
      href: "https://google.com",
    },
    {
      image: "https://static.toiimg.com/img/104753278/Master.jpg",
      title: "Beach View 1 BHK Apartment",
      price: "$1000/month",
      href: "https://google.com",
    },
    {
      image: "https://static.toiimg.com/img/104753278/Master.jpg",
      title: "Cozy 3 BHK Cottage",
      price: "$1500/month",
      href: "https://google.com",
    },
    {
      image: "https://static.toiimg.com/img/104753278/Master.jpg",
      title: "Hilltop 4 BHK Mansion",
      price: "$3000/month",
      href: "https://google.com",
    },
    // Add more properties as needed
  ],
  testimonials : [
    {
      image: "https://via.placeholder.com/50", // URL of the testimonial provider's image
      text: "I had a wonderful experience with Goa Homes. They helped me find the perfect property to rent. The staff was very friendly and professional. I would highly recommend them.",
      name: "Nadia Smith, Dubai", // Name and location of the testimonial provider
    },
    {
      image: "https://via.placeholder.com/50",
      text: "Goa Homes is amazing! They have a great selection of properties and the prices are very competitive. The customer service is top-notch. I will definitely use them again in the future.",
      name: "David Johnson, London",
    },
    {
      image: "https://via.placeholder.com/50",
      text: "I recently rented a villa through Goa Homes and I was very impressed with the quality of the property. It was exactly as described on their website. The staff was also very helpful and responsive. I would definitely use their services again.",
      name: "Rajesh Kumar, Mumbai",
    },
    {
      image: "https://via.placeholder.com/50",
      text: "I have been using Goa Homes for several years and I am always satisfied with their service. They offer a wide range of properties to choose from and the prices are very reasonable. The staff is also very professional and friendly. I highly recommend them to anyone looking for a property in Goa.",
      name: "Priya Reddy, Bangalore",
    },
  ]
};

export default function HomePage(props) {
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(setCT("home"))
  },[])
  return (
    <div className="flex flex-col justify-center bg-purple-50">
      <div className="flex flex-col items-center  w-full  max-md:max-w-full">
        <Navbar />
        <Banner />
        <FeaturedProperties properties={sampleJSONdata.featuredProperties} />
        <Testimonials testimonials={sampleJSONdata.testimonials}/>
        <Footer />
      </div>
    </div>
  );
}
