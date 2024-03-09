"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/Components/forms/Button";
import Input from "@/Components/forms/Input";
import { useRouter } from "next/navigation";
import authService from "@/lib/appwrite/authconfig";
import Cookies from "universal-cookie";
import toast, { Toaster } from "react-hot-toast";
import accountDetails from "@/actions/getUser";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const cookies = new Cookies();

  const loginMethod = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          cookies.set("user", data);
          cookies.set("isLoggedIn", true);
          toast.success("Successfully logged in");
          setTimeout(() => {
            router.push("/");
          }, 1000);
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getUser()
  },[])

  const getUser = async () => {
    const user = await accountDetails();
    if (user) {
      router.push("/")
      setLoading(false)
    }
    else {
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
                  loading="lazy"
                  alt="Login Beach Photo"
                  src="https://cdn.audleytravel.com/1080/770/79/15984870-goa-beach-goa.webp"
                  className="w-full aspect-[2.22] max-md:max-w-full rounded"
                />
              </div>
              <div className="mt-8 text-2xl font-bold tracking-tight text-neutral-900 max-md:max-w-full">
                Log in to your account
              </div>

              {error && (
                <p className="text-red-600 mt-8 text-center">{error}</p>
              )}
              <form onSubmit={handleSubmit(loginMethod)} className="mt-8">
                <div className="space-y-5">
                  <Input
                    label="Email: "
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    autoComplete="email"
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
                  <Input
                    label="Password: "
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: true,
                    })}
                  />
                  <Button
                    type="submit"
                    color="secondary"
                    className="w-full font-semibold"
                  >
                    Sign in
                  </Button>
                </div>
              </form>
            </div>
            <p
              onClick={() => router.push("/signup")}
              className="text-black text-sm text-center mt-4"
            >
              Don&apos;t have an account ?{" "}
              <span className="font-semibold cursor-pointer">Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
