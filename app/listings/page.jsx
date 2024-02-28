"use client"
import * as React from "react";
import Navbar from "../Components/Navbar";
import Listings from "./components/Listings";
import Filter from "./components/Filter";
import { properties } from "./data";
import { useDispatch } from "react-redux";
import { setAllProperties, setFilteredProperties } from "../redux/features/filterSlice";
import { setCT } from "../redux/features/currentTab";
const ListingsPage = (props) => {

    const dispatch = useDispatch();

    const handleProperties = () => {
        //Fetching data from database and storing in redux Note : Store in allProperties and filteredProperties too
        dispatch(setAllProperties(properties))
        dispatch(setFilteredProperties(properties))
    }

    React.useEffect(()=>{
        dispatch(setCT("listings"))
        //Fetch all the properties from the database here
        handleProperties();
    },[])
  return (
    <div className="flex flex-col bg-purple-50 min-h-screen">
      <Navbar/>
      <div className="justify-center px-6 py-5 w-full max-md:px-5 max-md:max-w-full ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md: mt-12">
        
          <div className="hidden lg:block"><Filter/></div>
          <Listings/>
        </div>
      </div>
    </div>
  );
}


export default ListingsPage