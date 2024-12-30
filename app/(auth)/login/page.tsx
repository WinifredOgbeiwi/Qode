"use client";
import React, { useState } from "react";
import Button from "@/app/component/common/Button";
import Input from "@/app/component/common/Input";
import { ROUTES } from "@/app/utils/imports";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login } from "@/app/lib/auth";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [userInfo, setuserInfo] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handlesOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    setuserInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handlesLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await login({
        email: userInfo.email,
        password: userInfo.password,
      });

      if (res?.user) {
        router.push(ROUTES.RESET);
      } else {
        console.error("Login failed");
        toast.error("Login failed. Please try again.", {
          position: "top-right",
          style: {
            backgroundColor: "#f44336",
            color: "#fff",
            border: "2px solid black",
          },
        });
      }
    } catch (error: any) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-4xl sm:text-5xl font-bold">Welcome Back</h2>
      <p className="text-sm">Login to access your account</p>
      <form onSubmit={handlesLogin} className="text-sm ">
        <Input
          label="Email"
          id="email"
          placeholder="Enter your email"
          type="email"
          value={userInfo.email}
          onchange={handlesOnChange}
        />
        <Input
          label="Password"
          id="password"
          placeholder="Enter your password"
          type="password"
          value={userInfo.password}
          onchange={handlesOnChange}
        />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="w-4 h-4 bg-transparent  outline-none "
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <Link
            href={ROUTES.FORGOT_PASSWORD}
            className="mt-3 mb-5 inline-block hover:text-[#924dfa]"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          label="Login"
          variant="primary"
          width="w-full"
          loading={loading ? true : false}
        />
      </form>
      <p className="text-sm mt-2">
        Don&#39;t have an account?
        <Link href={ROUTES.REGISTER} className="text-[#924dfa]"> Register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
