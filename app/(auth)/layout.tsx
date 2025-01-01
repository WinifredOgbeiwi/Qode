"use client";
import Image from "next/image";
import { IMAGES } from "../utils/imports";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={`flex flex-col relative min-h-screen md:flex-row-reverse  `}>
      <div className="md:flex hidden rounded-b-full md:rounded-none flex-col items-center justify-center bg-primary w-full md:w-[50%] overflow-hidden ">
        <Image
          src={IMAGES.Auth_BG}
          alt="Logo"
          className="absolute -z-10 -right-[20rem] w-[55rem] -top-56"
        />
        <Image
          src={IMAGES.Auth_Placeholder}
          alt="Logo"
          className="absolute -right-[15rem] w-[46rem] -top-14 object-cover "
        />
      </div>
      <div className=" md:hidden overflow-hidden">
        <Image
          src={IMAGES.Auth_BG}
          alt="Logo"
          className="absolute -z-10 -left-[10rem] w-[50rem] -top-[20rem] rotate-[270deg]"
        />
      </div>

      <div className="w-[90%] m-auto md:justify-start md:w-[38%]">
        <Image src={IMAGES.Logo} alt="Logo" className="w-28" />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AuthLayout;
