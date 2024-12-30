"use client"
import { LinkProps } from "@/app/utils/type";
import Link from "next/link";
import { useState } from "react";

const ButtonLink: React.FC<LinkProps> = ({ href, label, variant, width }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${width} ${
          hover ? "bg-[#F193DD] " : "bg-black"
        } inline-block rounded-md text-center border-black border transition-all duration-300`} >
      <span
        className={`rounded-md block -translate-x-[0.2rem] -translate-y-[0.2rem] border border-black transition-all duration-300 ${
          hover ? "bg-[#FFC8E6] border-black" : ""
        }`} >
        <span
          className={`${hover? "-translate-x-[0.2rem] -translate-y-[0.2rem]" :""} rounded-md block px-5 py-2 font-bold  border-2 border-black transition-all duration-300 ${
            variant === "primary" ? "bg-pink-400 md:bg-[#4a7eef] text-white" : "bg-white"
          }`} >
          {label}
        </span>
      </span>
    </Link>
  );
};

export default ButtonLink;

