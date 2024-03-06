"use client";
import React, { useEffect, useState } from "react";
import AdminNavbar from "./components/AdminNavbar";
import AdminSideBar from "./components/AdminSideBar";
import { useSelector } from "react-redux";
import RequestsTab from "./components/RequestsTab";
import PropertiesTab from "./components/PropertiesTab";
import Cookies from "universal-cookie";

const AdminPanelPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const cookie = new Cookies();
  const currentTab = useSelector(e => e.adminNav.currentTab)

  useEffect(()=>{
    if (cookie.get('isAdmin') == true){
      setIsAuthenticated(true)
    }
  })

  const handleSubmit = () =>{
    //check whether password and user name are matching 
    if ((email == 'admin@gmail.com')&&(password=='test123')){
      setIsAuthenticated(true);
      cookie.set('isAdmin',true)
    } else {
      alert("Incorrect password");
    }
  }

  return (
    <div className="h-screen relative bg-purple-50">
      <AdminNavbar />
      {isAuthenticated ? (
        <div className="min-w-screen flex pt-14 h-full">
          <div className="hidden md:block h-full">
            <AdminSideBar setIsModelOpen={() => {}} />
          </div>
          <div className="flex-1">
            {currentTab == "requests" && <RequestsTab />}
            {currentTab == "property" && <PropertiesTab />}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center rounded">
            <div className="bg-purple-200 p-4 flex-col">
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Admin Email" className="text-black block rounded bg-white my-2 "/>
              <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Admin Password" type="password" className="text-black block rounded bg-white my-2 "/>
              <button onClick={handleSubmit} className="bg-purple-300 rounded px-2 py-1  text-purple-800">Submit</button>
            </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanelPage;
