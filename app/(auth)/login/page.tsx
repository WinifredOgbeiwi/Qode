import Button from "@/app/component/common/Button";
import Input from "@/app/component/common/Input";
import { IMAGES, ROUTES } from "@/app/utils/imports";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="mt-12">
      <h2 className="text-5xl font-bold">Welcome Back</h2>
      <p className="text-sm">
        Login to access your account
        {/* <span className="font-bold">
          <Image
            src={IMAGES.Logo}
            alt="qode-logo"
            className="inline-block w-16"
          />
        </span> */}
      
      </p>

      <form action="" className="text-sm ">
        <Input
          label="Email"
          id="email"
          placeholder="Enter your email"
          type="email"
        />
        <Input
          label="Password"
          id="password"
          placeholder="Enter your password"
          type="password"
        />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="w-4 h-4 bg-transparent  outline-none "/>
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          <Link
            href={ROUTES.FORGOT_PASSWORD}
            className="mt-3 mb-5 inline-block hover:text-[#924dfa]"
          >
            Forgot Password?
          </Link>
        </div>
        <Button label="Login" variant="primary" width="w-full" />
      </form>
          <p className="text-sm mt-2">
        Don&#39;t have an account?
        <Link href={ROUTES.REGISTER} className="text-[#924dfa]">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
