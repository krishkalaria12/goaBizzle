"use client";
import * as React from "react";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const cookies = new Cookies();

  const handleSubmitData = () => {
    const body = {email,password}
    //get user details from backend and store in cookies
    const data = {
        fullName: "Aswin Raaj P S",
        email: email,
        phoneNumber: "1234567890"
    }
    console.log(body)
    cookies.set("user",data)
    cookies.set("isLoggedIn","true")
    console.log(body)
    //If successful, navigate to home page
    router.push("/");
  }

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
              Log in to your account
            </div>
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
              Password
            </div>
            <Input
              type="password"
              className="mt-1"
              value={password}
              placeholder="******"
              onValueChange={(e) => setPassword(e)}
            />
            <Button onClick={()=> handleSubmitData()} color="secondary" className="font-semibold mt-4">Log in</Button>
           
          </div>
            <p onClick={()=> router.push("/signup") } className="text-black text-sm text-center mt-4">Don&apos;t have an account ? <span className="font-semibold">Sign Up</span></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
