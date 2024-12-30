"use client";
import React, { useState } from "react";
import Button from "@/app/component/common/Button";
import Input from "@/app/component/common/Input";
import { ROUTES } from "@/app/utils/imports";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login } from "@/app/lib/auth";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [userInfo, setuserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    experience: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  const handlesOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    if (e.target.id === "experience") {
      setSelectedValue(e.target.value);
    }
    setuserInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

const fullname = userInfo.firstname + " " + userInfo.lastname;
  const handlesRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const uid = await register({
        email: userInfo.email,
        password: userInfo.password,
        fullname,
      });

      await axios.post("/api/database/users", {
        uid,
        email: userInfo.email,
        firstname: userInfo.firstname,
        lastname: userInfo.lastname,
        experience: userInfo.experience,
         username:userInfo.username,
      });
      router.push(ROUTES.VERIFY_EMAIL);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.error || "Invalid credentials");
      } else {
        throw new Error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="mt-12">
      <h2 className="text-4xl sm:text-5xl font-bold">Welcome</h2>
      <p className="text-sm">Kindly fill the form below to register</p>
      <form onSubmit={handlesRegister} className="text-sm ">
        <Input
          label="First Name"
          id="firstname"
          placeholder="Enter your First Name"
          type="text"
          value={userInfo.firstname}
          onchange={handlesOnChange}
        />
        <Input
          label="Last Name"
          id="lastname"
          placeholder="Enter your Last Name"
          type="text"
          value={userInfo.lastname}
          onchange={handlesOnChange}
        />
        <label htmlFor="experience" className="text-sm block mt-5">
          Experience Level
        </label>
        <select
          name=""
          id="experience"
          defaultValue=""
          onChange={handlesOnChange}
          required
          className={`w-full bg-white px-3 border-2 border-black h-14 mt-1 rounded-[2px] outline-none text-black ${
            selectedValue === "" ? "text-gray-400" : "text-black"
          }`}
        >
          <option value="" disabled>
            Please select an option
          </option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="expert">Expert</option>
        </select>
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


        <Button
          label="Register"
          variant="primary"
          width="w-full mt-10"
          loading={loading ? true : false}
        />
      </form>
      <p className="text-sm mt-2">
        Already have an account?
        <Link href={ROUTES.LOGIN} className="text-[#924dfa]"> Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
