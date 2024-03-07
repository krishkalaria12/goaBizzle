"use client";
import React, { useState, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import authService from "@/lib/appwrite/authconfig";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import Button from "@/Components/forms/Button";
import Input from "@/Components/forms/Input";
import toast, { Toaster } from "react-hot-toast";

const SignUpPage = () => {
  const router = useRouter();
  const cookies = new Cookies();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        console.log(userData);
        if (userData) {
          const phoneNumber = "+91" + data.phone;
          const updatePhone = await authService.updatePhoneNumber(
            phoneNumber,
            data.password
          );
          if (updatePhone) {
            cookies.set("user", userData);
            cookies.set("isLoggedIn",true);
            toast.success("Successfully registered your account");
            setTimeout(() => {
              router.push("/");
            }, 1000);
          }
        }
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    getUser()
  })

  const getUser = async () => {
    const user = await accountDetails();
    if (user) {
      router.push("/")
      setLoading(false)
    }
  }

  if (loading==true) {
    return <h1 className="flex justify-center items-center text-3xl font-bold min-h-screen">Loading</h1>
  }

  return (
    <>
      <Toaster position="top-right" />
      <div className="flex flex-col justify-center bg-white">
        <div className="flex justify-center items-center px-16 py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col pt-8 pb-12 max-w-full w-[512px]">
            <div className="flex flex-col px-4 max-md:max-w-full">
              <div className="flex flex-col justify-center bg-white max-md:max-w-full">
                <img
                  alt="Login Beach Photo"
                  loading="lazy"
                  src="https://cdn.audleytravel.com/1080/770/79/15984870-goa-beach-goa.webp"
                  className="w-full aspect-[2.22] max-md:max-w-full rounded"
                />
              </div>
              <div className="mt-8 text-2xl font-bold tracking-tight text-neutral-900 max-md:max-w-full mb-4">
                Create Account
              </div>

              {error && (
                <p className="text-red-600 mt-8 text-center">{error}</p>
              )}

              <form onSubmit={handleSubmit(create)}>
                <div className="space-y-5">
                  <Input
                    label="Full Name: "
                    autoComplete="username"
                    placeholder="Enter your full name"
                    {...register("name", {
                      required: true,
                    })}
                  />
                  <Input
                    label="Email: "
                    placeholder="Enter your email"
                    autoComplete="email"
                    type="email"
                    id="email"
                    {...register("email", {
                      required: true,
                      validate: {
                        matchPatern: (value) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                            value
                          ) || "Email address must be a valid address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-600 mt-2 text-center">
                      {errors.email.message}
                    </p>
                  )}
                  <Input
                    label="Password: "
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: true,
                      validate: {
                        matchPatern: (value) =>
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?/~]).{8,}$/.test(
                            value
                          ) ||
                          "Password requires at least one uppercase, one lowercase, one special character, and one number.",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-600 mt-2 text-center">
                      {errors.password.message}
                    </p>
                  )}
                  <Input
                    label="Phone: "
                    type="tel"
                    id="phone"
                    placeholder="Enter your Phone Number"
                    {...register("phone", {
                      required: true,
                      validate: {
                        matchPatern: (value) =>
                          /^\d{10}$/.test(value) ||
                          "Phone Number should be of 10 digits. Enter a valid phone number",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-600 mt-2 text-center">
                      {errors.phone.message}
                    </p>
                  )}
                  <Button
                    color="secondary"
                    type="submit"
                    className="font-semibold mt-4 w-full"
                  >
                    Create Account
                  </Button>
                </div>
              </form>
            </div>
            <p
              onClick={() => router.push("/login")}
              className="text-black text-sm text-center mt-4"
            >
              Already have an account ?{" "}
              <span className="font-semibold cursor-pointer">Login</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
