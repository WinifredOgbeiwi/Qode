import {
  ArrowRightDoubleIcon,
  Linkedin02Icon,
  MailAtSign01Icon,
} from "@/app/utils/icons";
import { FooterUrl, IMAGES } from "@/app/utils/imports";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#01002a] px-10 md:px-20 pb-2 pt-16 text-white flex  flex-col items-center md:items-start ">
      <div className=" flex flex-col md:flex-row md:justify-between justify-center items-center text-center max-[350px]:text-[0.8rem] text-lg">
        <div className="md:w-1/2">
          <Image src={IMAGES.Logo_white} alt="Qode Logo" className="max-[350px]:w-48 w-60  m-auto md:m-0" />
          <p className="my-10">
            Qode is your go-to platform to challenge your knowledge of
            technology and sharpen your skills. Join our community and stay
            ahead in the ever-evolving tech world!
          </p>

          <div className="bg-[#F193DD] inline-block rounded-md text-center border-black border transition-all duration-300 w-full">
            <span
              className="rounded-md block -translate-x-[0.2rem] -translate-y-[0.2rem] border border-transparent transition-all duration-300
         bg-[#FFC8E6] border-black w-full"
            >
              <span className="-translate-x-[0.2rem] -translate-y-[0.2rem] rounded-md  border-2 border-black transition-all duration-300 bg-white flex">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Subscribe to our Newsletter"
                  className="outline-none bg-none w-[85%] text-black px-2 py-4"
                />
                <button className="bg-green-400 hover:bg-pink-400 border-l-2 border-black w-[15%] flex items-center justify-center">
                  <ArrowRightDoubleIcon />
                </button>{" "}
              </span>
            </span>
          </div>
        </div>
        <div className="flex gap-20 mt-10 md:mt-0">
          {FooterUrl.map((link, index) => (
            <div key={index}>
              <h2 className="max-[350px]:text-[1rem]  text-xl font-bold">{link.title}</h2>
              {link.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="mt-5 inline-block hover:border-b-4 hover:border-pink-400 border-b-4 border-transparent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div aria-label="contact" className="flex gap-10 mt-8 items-center">
        <div>
          <MailAtSign01Icon className="hover:text-pink-400 hover:scale-105" />
          <Link href="https://www.linkedin.com/in/winifred-imade-ogbeiwi/" />
        </div>
        <div>
          <Linkedin02Icon className="hover:text-pink-400 hover:scale-105" />
          <Link href="https://www.linkedin.com/in/winifred-imade-ogbeiwi/" />
        </div>
      </div>
      <p className="mt-10">2025 Qode. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
