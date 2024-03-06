"use client";
import { setTab } from "@/app/redux/features/adminNav";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminSideBar from "./AdminSideBar";

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



const AdminNavbar = () => {
  ;
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <div className="h-screen absolute top-0 ">
      <div className="fixed min-w-full items-center flex bg-gradient-to-r from-indigo-900 to-indigo-600 px-8 py-4 bg-indigo-50 gap-5">
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
        <p className="text-xl font-semibold">GoaBizzle Admin Panel</p>
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
