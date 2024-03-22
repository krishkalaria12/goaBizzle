"use client";
import { setTab } from "@/redux/features/adminNav";
import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import AdminSideBar from "./AdminSideBar";
import authService from "@/lib/appwrite/authconfig";
import Cookies from "universal-cookie";

const HamburgerIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};



function AdminNavbar() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const cookies = new Cookies()

  const handleLogout = async () => {
    await authService.logout();
    cookies.set("isLoggedIn", false);
    cookies.set("user", null);
    router.push("/login");
  };

  return (
    <div className="h-screen absolute top-0 ">
      <div className="fixed justify-between z-50 min-w-full items-center flex bg-gradient-to-r from-indigo-900 to-indigo-600 px-8 py-4 bg-indigo-50 gap-5">
        <div className="md:hidden h-fit">
          {isModelOpen ? (
            <button onClick={() => setIsModelOpen(false)}>
              <CloseIcon />
            </button>
          ) : (
            <button onClick={() => setIsModelOpen(true)}>
              <HamburgerIcon />
            </button>
          )}
        </div>
        <Link href={"/admin"}><p className="text-xl font-semibold">GoaBizzle Admin Panel</p></Link>
        <div>
        <button
          onClick={handleLogout}
          className=" px-2 py-1 font-semibold bg-purple-200 rounded">
          Logout
        </button>
      </div>
      </div>
      <div onClick={()=> setIsModelOpen(false)} className="md:hidden mt-14 h-full w-screen">
        {isModelOpen == true && (
          <AdminSideBar setIsModelOpen={setIsModelOpen}/>
        )}
      </div>
    </div>
  );
};

export default AdminNavbar;
