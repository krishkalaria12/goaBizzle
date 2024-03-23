"use client";
import * as React from "react";
import AdminNavbar from "@/Components/admin/AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import {
  setName,
  setArea,
  setBathrooms,
  setCity,
  setDescription,
  setPincode,
  setPrice,
  setPropertyType,
  setBedrooms,
  setImageUrls,
} from "@/redux/features/property";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { createListing } from "@/actions/createListing";
import accountDetails from "@/actions/getUser";

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

const Admin = () => {
  const name = useSelector((e) => e.property.name);
  const propertyType = useSelector((e) => e.property.propertyType);
  const city = useSelector((e) => e.property.city);
  const area = useSelector((e) => e.property.area);
  const pincode = useSelector((e) => e.property.pincode);
  const dispatch = useDispatch();
  const description = useSelector((e) => e.property.description);
  const price = useSelector((e) => e.property.price);
  const bedrooms = useSelector((e) => e.property.bedrooms);
  const bathrooms = useSelector((e) => e.property.bathrooms);
  const imageUrls = useSelector((e) => e.property.imageUrls);
  const cookies = new Cookies();
  const router = useRouter();
  const [loading, setIsLoading] = React.useState(true);
  const [user,setUser] = React.useState();

  const handleSubmitData = async () => {
    const data = {
      name,
      propertyType,
      city,
      area,
      pincode,
      description,
      price: parseInt(price),
      bedrooms: parseInt(bedrooms),
      bathrooms: parseInt(bathrooms),
      email: user.email,
      username: user.name,
      phone: user.phone,
      url: imageUrls,
    };


    const createListingData = await createListing(data);
    if (createListingData) {
      toast.success("Your Request for Listing has been created!")
      dispatch(setName(""));
      dispatch(setPropertyType(""));
      dispatch(setCity(""));
      dispatch(setArea(""));
      dispatch(setPincode(""));
      dispatch(setDescription(""));
      dispatch(setPrice(""));
      dispatch(setBedrooms(""));
      dispatch(setBathrooms(""));
    }
  };

  // Function to handle image upload
  const handleImageUpload = async (event) => {
    const files = event.target.files;
    const formData = new FormData();
    const newUrls = [];
    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
      formData.append("upload_preset", "bisineimages");
      // Replace "your_cloudinary_upload_preset" with your actual Cloudinary upload preset
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/ddkpclbs2/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      newUrls.push(data.secure_url);
    }
    const updatedUrls = [...imageUrls, ...newUrls];
    dispatch(setImageUrls(updatedUrls));
  };

  React.useLayoutEffect(() => {
    getUser()
  }, []);

  const getUser = async () => {
    const user = await accountDetails();
    if (user) {
      setUser(user)
      setIsLoading(false)
    }
    else{
      router.push("/")
    }
  }

  if (loading==true) {
    return <h1 className="flex justify-center items-center text-3xl font-bold min-h-screen">Loading</h1>
  }

  return (
    <>
      <Toaster />
      <div className="relative">
      <AdminNavbar/>
    <div className="flex flex-col items-center pb-12 bg-purple-50 z-0">
      
      <div className="flex flex-col items-start mt-14 w-screen md:w-auto px-5">
        <div className="justify-center items-start py-4 pr-16  mt-10 max-w-full text-3xl font-bold tracking-tighter whitespace-nowrap text-neutral-900  max-md:pr-5">
          List your property
        </div>
        <div className="mt-3 text-base font-medium leading-6 text-neutral-900 max-w-full">
          Property name
        </div>
        <Input
          color="secondary"
          type="text"
          className="mt-1"
          value={name}
          classNames={"w-full"}
          onValueChange={(e) => dispatch(setName(e))}
        />
        <div className="mt-6 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
          Upload Images (Up to 5)
        </div>
        <input
          className="text-black"
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />
        {/* Display uploaded images */}
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
            className="h-48 w-96 object-fit"
          />
        ))}
        <div className="mt-6 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
          Property type
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

        <div className="mt-6 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
          City
        </div>
        <Input
          color="secondary"
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
              color="secondary"
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
              color="secondary"
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
        <Textarea
          color="secondary"
          value={description}
          onValueChange={(e) => dispatch(setDescription(e))}
          placeholder="Write a brief description of your property"
          minRows={5}
        />
        <div className="mt-6 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
          Price
        </div>
        <Input
          color="secondary"
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
          color="secondary"
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
          color="secondary"
          type="number"
          className="mt-1"
          value={bathrooms}
          placeholder="2"
          onValueChange={(e) => dispatch(setBathrooms(e))}
        />
        <Button
          onClick={() => handleSubmitData()}
          color="secondary"
          className="mt-5 py-2 font-semibold w-full"
        >
          Add Property
        </Button>
      </div>
    </div>
    </div>
    </>
  );
};

export default Admin;