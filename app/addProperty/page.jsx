"use client";
import * as React from "react";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { setName, setArea, setBathrooms, setCity, setDescription, setPincode, setPrice, setPropertyType ,setBedrooms} from "../redux/features/property";
import { setCT } from "../redux/features/currentTab";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

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

const ListYourPropertyPage = () => {
  const name = useSelector((e) => e.property.name);
  const propertyType = useSelector((e) => e.property.propertyType);
  const city = useSelector((e) => e.property.city);
  const area = useSelector((e) => e.property.area);
  const pincode = useSelector(e => e.property.pincode);
  const dispatch = useDispatch();
  const description = useSelector(e => e.property.description)
  const price = useSelector(e => e.property.price)
  const bedrooms = useSelector(e => e.property.bedrooms)
  const bathrooms = useSelector(e=> e.property.bathrooms)
  const cookies = new Cookies();
  const router = useRouter();

  const handleSubmitData = () => {
    const body = {
        name,propertyType,city,area,pincode,description,price, bedrooms, bathrooms
    }

    if (cookies.get('isLoggedIn') == true){
        //User need to be logged in
        const body = {
            name,propertyType,city,area,pincode,description,price, bedrooms, bathrooms, user: cookies.get("user")
        }
        console.log(body);
        
    } else {
        alert("Kindly login to request your property listing...")
        router.push("/login");
    }
    
    console.log(body)
  }

  React.useEffect(()=>{
    dispatch(setCT("addproperty"));
  },[])

  return (
    <div className="flex flex-col items-center pb-12 bg-purple-50">
      <Navbar />
      <div className="flex flex-col items-start mt-14">
        <div className="justify-center items-start py-4 pr-16  mt-10 max-w-full text-3xl font-bold tracking-tighter whitespace-nowrap text-neutral-900 w-[512px] max-md:pr-5">
          List your property
        </div>
        <div className="mt-3 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
          Property name
        </div>
        <Input
          type="text"
          className="mt-1"
          value={name}
          onValueChange={(e) => dispatch(setName(e))}
        />
        <div className="mt-6 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
          Property type
        </div>
        <Select
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

        <div className="mt-6 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
          City
        </div>
        <Input
          type="text"
          className="mt-1"
          value={city}
          placeholder="North Goa"
          onValueChange={(e) => dispatch(setCity(e))}
        />
        <div className="flex gap-4 justify-center mt-6 max-w-full text-base leading-6 whitespace-nowrap w-[480px] max-md:flex-wrap">
          <div className="flex flex-col flex-1 px-5">
            <div className="font-medium text-neutral-900">Area</div>
            <Input
              type="text"
              className="mt-1"
              value={area}
              placeholder="North Goa"
              onValueChange={(e) => dispatch(setArea(e))}
            />
          </div>
          <div className="flex flex-col flex-1 px-5">
            <div className="font-medium text-neutral-900">Pin code</div>
            <Input
              type="number"
              className="mt-1"
              value={pincode}
              placeholder="600100"
              onValueChange={(e) => dispatch(setPincode(e))}
            />
          </div>
        </div>
        <div className="mt-6 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
          Description
        </div>
        <Textarea value={description} onValueChange={(e) => dispatch(setDescription(e))} placeholder="Write a brief description of your property" minRows={5} />
        <div className="mt-6 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
          Price
        </div>
        <Input
              type="number"
              className="mt-1"
              value={price}
              placeholder="600100"
              onValueChange={(e) => dispatch(setPrice(e))}
            />
        <div className="mt-6 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
          Number of bedrooms
        </div>
        <Input
              type="number"
              className="mt-1"
              value={bedrooms}
              placeholder="3"
              onValueChange={(e) => dispatch(setBedrooms(e))}
            />
        <div className="mt-6 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
          Number of bathrooms
        </div>
        <Input
              type="number"
              className="mt-1"
              value={bathrooms}
              placeholder="2"
              onValueChange={(e) => dispatch(setBathrooms(e))}
            />
        <Button onClick={()=> handleSubmitData()} color="secondary" className="mt-5 py-2 font-semibold w-full" >Request for Listing</Button>
      </div>
    </div>
  );
};

export default ListYourPropertyPage;
