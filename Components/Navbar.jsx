"use client";
import { useRouter } from "next/navigation";
import React, { useState, useMemo, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { FaUserCircle } from "react-icons/fa";
import authService from "@/lib/appwrite/authconfig";
import toast, { Toaster } from "react-hot-toast";
import accountDetails from "@/actions/getUser";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [isDropDown, setisDropDown] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();
  const ct = useSelector(e => e.currentTB.current)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const cookies = useMemo(() => new Cookies(), []);

  useLayoutEffect(() => {
    user()
  }, [isLoggedIn]);

  const user = async () => {
    const data = await accountDetails();
    if (data) {
      if (data.labels && data.labels.length > 0 && data.labels.includes("admin")) {
        setIsAdmin(true);
        setIsLoggedIn(true);
      }else {
        setIsLoggedIn(true)
      }
    }
    else{
      setIsLoggedIn(false)
    }
  }

  const handleLogout = async () => {
    await authService.logout();
    cookies.set("isLoggedIn", false);
    cookies.set("user", null);
    toast.success("Successfully logged out");
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  };

  const handleLoggedInDropdown = () => {
    setisDropDown((prev) => !prev);
  };

  return (
    <>
      <Toaster position="top-right" />
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
                {isAdmin && <li onClick={()=> router.push("/admin")}>
                  <button className="px-2 py-1 bg-purple-500 text-white font-semibold rounded-lg text-md">
                    Admin
                  </button>
                </li>}
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
            {isLoggedIn == true && (
                  <div
                    className="relative inline-block"
                    onClick={handleLoggedInDropdown}
                  >
                    <FaUserCircle className="w-8 h-8 cursor-pointer" />

                    {isDropDown && (
                      <div className="absolute right-4 mt-2 w-32 p-2 bg-white border border-gray-300 rounded shadow">
                        <ul>
                          <li
                            onClick={handleLogout}
                            className="py-1 dark:text-pink-600 cursor-pointer font-bold text-pink-500"
                          >
                            Logout
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
                {isLoggedIn != true && (
                  <button
                    onClick={() => router.push("/login")}
                    className=" px-2 py-1 font-semibold bg-purple-200 rounded"
                  >
                    Login
                  </button>
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
                <p className="p-2 rounded-md cursor-pointer hover:bg-purple-500">Home</p>
              </li>
              <li onClick={()=>router.push("/listings")} className="px-4 py-2 ">
                <p className="p-2 rounded-md cursor-pointer hover:bg-purple-500">Listings</p>
              </li>
              <li onClick={()=>router.push("/services")} className="px-4 py-2 ">
                <p className="p-2 rounded-md cursor-pointer hover:bg-purple-500">Services</p>
              </li>
              <li onClick={()=>router.push("/aboutus")} className="px-4 py-2 ">
                <p className="p-2 rounded-md cursor-pointer hover:bg-purple-500">About Us</p>
              </li>
              <li onClick={()=>router.push("/addProperty")} className="px-4 py-2 ">
                <p className="p-2 rounded-md cursor-pointer hover:bg-purple-500">List your Property</p>
              </li>
              {isAdmin && <li onClick={()=>router.push("/admin")} className="px-4 py-2 ">
                <p className="p-2 rounded-md cursor-pointer hover:bg-purple-500">Admin</p>
              </li>}
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;

