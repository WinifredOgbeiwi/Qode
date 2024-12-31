"use client";
import React, { useState } from "react";
import Button from "@/app/component/common/Button";
import Input from "@/app/component/common/Input";
import { IMAGES, ROUTES } from "@/app/utils/imports";
import Link from "next/link";
import { forgotpassword } from "@/app/lib/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ResetPasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const router = useRouter();

  const handlesForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await forgotpassword(email);
      setResetEmailSent(true);
    } catch (error) {
      console.error("Error sending reset email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`mt-12 ${resetEmailSent && "border-2 border-black"}`}>
      <h2
        className={`text-4xl ${
          resetEmailSent && "bg-[#B8FF9F] border-b-2 py-2 border-black"
        } font-bold text-center mb-5 `}
      >
        {resetEmailSent ? "Reset Password" : "Forgot your password?"}
      </h2>
      <p className={`text-sm mt-1 ${resetEmailSent && "hidden"}`}>
        No problem! Just enter the email address that you registered with to
        reset it.
      </p>
      {resetEmailSent ? (
        <div className="">
          <p className="px-5">
            We have sent instructions to <span className="border-b-2 font-semibold border-[#FF9EFF]">{email} </span> to reset your password. If you
            do not receive an email, check your spam folder or make sure this
            email address is registered with
            <span>
              <Image
                src={IMAGES.Logo}
                alt="qode-logo"
                className="inline-block w-16"
              />
            </span>
          </p>
          <div className="flex my-4 justify-center">
            <div
              className=" cursor-pointer w-fit px-3 bg-[#FF9EFF] py-2  border-2 border-black "
              onClick={handlesForgotPassword}
            >
              Resend email
            </div>
          </div>

          <Button
            onclick={() => router.push(ROUTES.LOGIN)}
            width="w-full mb-6 md:mb-0"
            variant="primary"
            label="Login"
          />
        </div>
      ) : (
        <>
          <form onSubmit={handlesForgotPassword} className="text-sm ">
            <Input
              label="Email"
              id="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onchange={(e) => setEmail(e.target.value)}
            />

            <Button
              label="Send"
              variant="primary"
              width="w-full"
              loading={loading ? true : false}
            />
          </form>

          <p className="text-sm mt-2">
            Remember Password?
            <Link href={ROUTES.LOGIN} className="text-[#924dfa]">
              {" "}
              Login
            </Link>
          </p>
        </>
      )}
    </div>
  );
};

export default ResetPasswordPage;
