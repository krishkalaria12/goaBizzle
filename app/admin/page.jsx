"use client";
import React, { useLayoutEffect, useState } from "react";
import AdminNavbar from "@/Components/admin/AdminNavbar";
import AdminSideBar from "@/Components/admin/AdminSideBar";
import { useSelector } from "react-redux";
import RequestsTab from "@/Components/admin/RequestsTab";
import PropertiesTab from "@/Components/admin/PropertiesTab";
import Cookies from "universal-cookie";
import accountDetails from "@/actions/getUser";
import { useRouter } from "next/navigation"
import authService from "@/lib/appwrite/authconfig";
import toast, { Toaster } from "react-hot-toast";
import { Flex, Box, Input, Button, Heading } from '@chakra-ui/react';

const AdminPanelPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const cookie = new Cookies();
  const router = useRouter()
  const currentTab = useSelector(e => e.adminNav.currentTab)

  useLayoutEffect(()=>{
    user()
  },[setIsAuthenticated])

  const user = async () => {
    try {
        setLoading(true); // Set loading to true while fetching data
        const data = await accountDetails();
        console.log(data);
        if (data && data.labels && data.labels.length > 0 && data.labels.includes("admin")) {
            setIsAuthenticated(true);
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
    } finally {
        setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  const handleSubmit = async () =>{
    const data = {
      email: email,
      password: password
    }
    const session = await authService.login(data);
    if (session) {
      const user = await accountDetails();
      if (user!=null && user.length > 0 && user.labels.length > 0 && user.labels[0]=="admin") {
        setIsAuthenticated(true)
        cookie.set('isAdmin',true)
      }
      else {
        toast.error("You are not an admin")
        router.push("/")
      }
    }
  }

  if (loading==true) {
    return <h1 className="flex justify-center items-center text-3xl font-bold min-h-screen">Loading</h1>
  }

  return (
    <div className="h-screen relative bg-purple-50">
    {isAuthenticated && <AdminNavbar />}
      <Toaster position="top-right" />
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
        <Flex
      w="full"
      h="full"
      justify="center"
      align="center"
      rounded="md"
      bg="gray.100"
      p={8}
    >
      <Box bg="purple.200" p={8} borderRadius="md">
        <Heading mb={4} textAlign="center" color="purple.800">
          Login
        </Heading>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Admin Email"
          variant="filled"
          color="black"
          my={2}
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Admin Password"
          type="password"
          variant="filled"
          color="black"
          my={2}
        />
        <Button
          onClick={handleSubmit}
          bg="purple.300"
          color="purple.800"
          rounded="md"
          px={4}
          py={2}
          _hover={{ bg: 'purple.400' }}
        >
          Submit
        </Button>
      </Box>
    </Flex>
      )}
    </div>
  );
}

export default AdminPanelPage