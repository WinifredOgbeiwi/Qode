"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IMAGES, NavUrl, ROUTES } from "@/app/utils/imports";
import ButtonLink from "../common/ButtonLink";
import { Cancel01Icon, Menu01Icon } from "@/app/utils/icons";
import { useState } from "react";
const Header:React.FC = () => {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="relative" >
      <div className=" flex text-lg justify-between items-center mt-7 md:my-7 px-8 md:px-20 pb-5 border-b-4 border-black font-semibold sticky z-50 w-full">
        <div className="w-28">
          <Image src={IMAGES.Logo} alt="logo" />
        </div>
        <nav className="hidden md:flex gap-12">
          {NavUrl.map((link, index) => (
            <li
              key={index}
              className={`hover:scale-105 ${pathname === link.path ? "text-[#4a7eef]" : "" }`}>
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
        </nav>
        {
          showNav ?  <Cancel01Icon className="md:hidden block" onClick={()=>setShowNav(!showNav)}/> : <Menu01Icon className="md:hidden block" onClick={()=>setShowNav(!showNav)}/>
        }
 
        <div className=" hidden md:flex gap-5 ">
          <ButtonLink href={ROUTES.LOGIN} label="Login" variant="secondary" />
          <ButtonLink href={ROUTES.REGISTER} label="Register" variant="primary" />
        </div>
       
      </div>
       {
          showNav && (
            <nav className="md:hidden px-5 text-xl   w-full absolute bg-[#4a7eef] z-50">
            
            <ul className=" flex justify-between">
              {NavUrl.map((link, index) => (
                <li
                  key={index}
                  className={`hover:scale-105 text-white  mt-8 ${pathname === link.path? "border-b-pink-400 border-b-4 w-fit" : "" }`}>
                  <Link href={link.path} onClick={()=>setShowNav(false)}>{link.label}</Link>
                </li>
              ))}
         
            </ul>
                  <div className=" ">
          <ButtonLink href={ROUTES.LOGIN} label="Login" variant="secondary" width="w-full my-8"/>
          <ButtonLink href={ROUTES.REGISTER} label="Register" variant="primary" width="w-full mb-8"/>
        </div>
        </nav>
          )
        }
    </header>
  );
};

export default Header;
