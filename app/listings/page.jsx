"use client"
import * as React from "react";
import Navbar from "@/Components/Navbar";
import Listings from "@/Components/listingcomp/Listings";
import Filter from "@/Components/listingcomp/Filter";
import { useDispatch } from "react-redux";
import { setAllProperties, setFilteredProperties } from "@/redux/features/filterSlice";
import { setCT } from "@/redux/features/currentTab";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import { getProductListings } from "@/actions/ListListings";

const ListingsPage = (props) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(true)
    const handleProperties = (properties) => {
        dispatch(setAllProperties(properties))
        dispatch(setFilteredProperties(properties))
        setLoading(false)
    }

    React.useEffect(()=>{
        dispatch(setCT("listings"))
        data();
    },[])

    const data = async () => { 
      const response = await getProductListings();
      if (response) {
        const properties = response.documents
        handleProperties(properties);
      }
    }

    if (loading) {
      return <h1 className='text-2xl font-bold text-black'>Loading</h1>
    }


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