"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@nextui-org/react";
import Cookies from "universal-cookie";

const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const cookies = new Cookies();

  const handleSubmit = () => {
    const body = {
      fullName,
      email,
      phoneNumber,
      password,
    };
    console.log(body);
    const data = {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber
    }
    cookies.set("user", data);
    cookies.set("isLoggedIn", "true");
    //If successful, navigate to home page
    router.push("/")
  };
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex justify-center items-center px-16 py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col pt-8 pb-12 max-w-full w-[512px]">
          <div className="flex flex-col px-4 max-md:max-w-full">
            <div className="flex flex-col justify-center bg-white max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.audleytravel.com/1080/770/79/15984870-goa-beach-goa.webp"
                className="w-full aspect-[2.22] max-md:max-w-full rounded"
              />
            </div>
            <div className="mt-8 text-2xl font-bold tracking-tight text-neutral-900 max-md:max-w-full">
              Create Account
            </div>
            <div className="mt-6 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
              Full Name
            </div>
            <Input
              type="text"
              className="mt-1"
              value={fullName}
              placeholder="Aswin Raaj"
              onValueChange={(e) => setFullName(e)}
            />
            <div className="mt-6 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
              Email
            </div>
            <Input
              type="text"
              className="mt-1"
              value={email}
              placeholder="abc@example.com"
              onValueChange={(e) => setEmail(e)}
            />
            <div className="mt-6 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
              Phone number
            </div>
            <Input
              type="text"
              className="mt-1"
              value={phoneNumber}
              placeholder="1234567890"
              onValueChange={(e) => setPhoneNumber(e)}
            />
            <div className="mt-6 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
              Password
            </div>
            <Input
              type="password"
              className="mt-1"
              value={password}
              placeholder="******"
              onValueChange={(e) => setPassword(e)}
            />
            <Button
              onClick={() => handleSubmit()}
              color="secondary"
              className="font-semibold mt-4"
            >
              Create Account
            </Button>
          </div>
          <p
            onClick={() => router.push("/login")}
            className="text-black text-sm text-center mt-4"
          >
            Already have an account ?{" "}
            <span className="font-semibold">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
