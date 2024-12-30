"use client";
import { ButtonProps } from "@/app/utils/type";
import { useState } from "react";
import Loader from "./Loader";

const Button: React.FC<ButtonProps> = ({ label, width, onclick,loading }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onclick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${width} ${
        hover ? "bg-[#F193DD] " : "bg-black"
      } inline-block rounded-sm text-center border-black border transition-all duration-300 text-lg font-semibold`}
    >
      <span
        className={`rounded-sm block -translate-x-[0.2rem] -translate-y-[0.2rem] border border-black transition-all duration-300 ${
          hover ? "bg-[#FFC8E6] border-black" : ""
        }`}
      >
        <span
          className={`${
            hover ? "-translate-x-[0.2rem] -translate-y-[0.2rem]" : ""
          } rounded-sm block px-5 py-3  border-2 border-black transition-all duration-300 bg-pink-400`}
        >
          {loading ? <Loader/> : label}
        </span>
      </span>
    </button>
  );
};

export default Button;
