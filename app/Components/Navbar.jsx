"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cookies = new Cookies();
  const [isLoggedIn, setIsLoggedIn] = useState(cookies.get("isLoggedIn") || "");
  const router = useRouter();
  const ct = useSelector(e => e.currentTB.current)

  const toggleMenu = () => {
    console.log("Toggling Menu");
    setIsOpen(!isOpen);
  };

  

  return (
    <nav className="bg-purple-50 fixed shadow-md text-black z-50">
      <div>
        <div
          className={`flex w-screen lg:px-16 justify-between items-center lg:py-5 md:px-8 md:py-6 px-6 py-4 ${
            isOpen ? "bg-white" : ""
          }`}
        >
          <div onClick={()=> router.push("/")} className="cursor-pointer flex justify-center items-center gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b47699c21e249fbd82f6af1c7c4b1e872460957ad53165f4d479c2c7f2fbe8f2?"
              className="w-8 h-8 rounded-full"
              alt="Logo"
            />
            <p className="text-xl font-semibold">
              <span className="text-purple-500">Goa</span>Bizzle
            </p>
          </div>
          <div className="flex gap-4">
            <div>
              <ul className="hidden lg:flex items-center text-black gap-7 ">
              <li onClick={()=> router.push("/")}>
                  <span className={`cursor-pointer hover:text-purple-500 ${ct == "home" ? "text-purple-600 font-semibold" : ""}`}>
                    Home
                  </span>
                </li>
                <li onClick={()=> router.push("/listings")}>
                  <span className={`cursor-pointer hover:text-purple-500 ${ct == "listings" ? "text-purple-600 font-semibold" : ""}`}>
                    Listings
                  </span>
                </li>
                <li onClick={()=> router.push("/services")}>
                  <span className={`cursor-pointer hover:text-purple-500 ${ct == "services" ? "text-purple-600 font-semibold" : ""}`}>
                    Services
                  </span>
                </li>
                <li onClick={()=> router.push("/aboutus")}>
                  <span className={`cursor-pointer hover:text-purple-500 ${ct == "aboutus" ? "text-purple-600 font-semibold" : ""}`}>
                    About Us
                  </span>
                </li>
                
                <li onClick={()=> router.push("/addProperty")}>
                  <button className="px-2 py-1 bg-purple-500 text-white font-semibold rounded-lg text-md">
                    List your property
                  </button>
                </li>
              </ul>
              <div className="lg:hidden text-purple-500">
                <button onClick={toggleMenu}>
                  {!isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#a855f7"
                      className="w-8 h-8 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#a855f7"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {/* Need to update with profile picture in future*/}
            <div>
              {isLoggedIn != true ? (
                <button onClick={()=> router.push("/login")} className=" px-2 py-1 font-semibold bg-purple-200 rounded">
                  Login
                </button>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#000"
                    className="w-8 h-8 text-black"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>
              )}
            </div>
          </div>
        </div>
        <div
          onClick={() => toggleMenu()}
          className={`flex flex-col bg-purple-300 flex-1 h-screen  transition-all  duration-300 ease-in-out overflow-hidden lg:hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className={`   backdrop-opacity-5  `}>
            <ul className="flex-col  text-black gap-10 ">
            <li onClick={()=>router.push("/")} className="px-4 py-2 ">
                <p className="p-2 rounded-md hover:bg-purple-500">Home</p>
              </li>
              <li onClick={()=>router.push("/listings")} className="px-4 py-2 ">
                <p className="p-2 rounded-md hover:bg-purple-500">Listings</p>
              </li>
              <li onClick={()=>router.push("/services")} className="px-4 py-2 ">
                <p className="p-2 rounded-md hover:bg-purple-500">Services</p>
              </li>
              <li onClick={()=>router.push("/aboutus")} className="px-4 py-2 ">
                <p className="p-2 rounded-md hover:bg-purple-500">About Us</p>
              </li>
              <li onClick={()=>router.push("/addProperty")} className="px-4 py-2 ">
                <p className="p-2 rounded-md hover:bg-purple-500">List your Property</p>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

