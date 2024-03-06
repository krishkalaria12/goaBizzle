"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTab } from '@/app/redux/features/adminNav';

const RaiseHandIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 0 1 2.25 0v10.937a4.505 4.505 0 0 0-3.25 2.373 8.963 8.963 0 0 1 4-.935A.75.75 0 0 0 18 15v-2.266a3.368 3.368 0 0 1 .988-2.37 1.125 1.125 0 0 1 1.591 1.59 1.118 1.118 0 0 0-.329.79v3.006h-.005a6 6 0 0 1-1.752 4.007l-1.736 1.736a6 6 0 0 1-4.242 1.757H10.5a7.5 7.5 0 0 1-7.5-7.5V6.375a1.125 1.125 0 0 1 2.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 0 1 2.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875Z" />
      </svg>
    );
  };
  
  const HomeIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
        <path
          fillRule="evenodd"
          d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

const AdminSideBar = ({setIsModelOpen}) => {
    const dispatch = useDispatch();
  const currentTab = useSelector((e) => e.adminNav.currentTab)
  return (
    <div className="bg-purple-200 h-full px-4 py-2 cursor-pointer">
            <div
              onClick={() => {
                dispatch(setTab("requests"));
                setIsModelOpen(false);
              }}
              className={`flex  p-2 rounded  transition-all ease-in-out duration-200 gap-2 my-3 ${
                currentTab == "requests"
                  ? "bg-purple-300 text-purple-800 font-semibold"
                  : "hover:text-purple-400 text-black"
              }`}
            >
              <RaiseHandIcon />
              <div>Requests</div>
            </div>
            <div
              onClick={() => {
                dispatch(setTab("property"));
                setIsModelOpen(false);
              }}
              className={`flex  p-2 rounded transition-all ease-in-out duration-200 gap-2 my-3 ${
                currentTab == "property"
                  ? "bg-purple-300 text-purple-800 font-semibold"
                  : " hover:text-purple-400 text-black"
              }`}
            >
              <HomeIcon />
              <div>Manage Properties</div>
            </div>
          </div>
  )
}

export default AdminSideBar