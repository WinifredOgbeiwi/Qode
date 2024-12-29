import { IMAGES, ROUTES } from "@/app/utils/imports";
import Image from "next/image";
import React from "react";
import ButtonLink from "../common/ButtonLink";

const Feature4 = () => {
  return (
    <div className="text-xl px-8 md:px-32 py-10 border-t-4 border-black bg-[#B7E0F9]">
      <div className="md:my-24 flex flex-col md:flex-row justify-between items-center">
        <Image
          src={IMAGES.ImageHolder}
          alt="Image Holder"
          className="border-4 border-black rounded-2xl h-1/3  w-2/3 md:w-1/3"
        />

        <div className="md:w-[50%] mt-10 md:mt-0">
          <h2 className="text-7xl max-[900px]:text-5xl font-bold"> CATEGORIES!</h2>
          <h2 className="max-[900px]:text-2xl text-4xl font-bold mt-4">Pick Your Favorite Category!</h2>
          <p className="my-6">
            Explore a variety of quiz categories tailored for students like you! Whether you are into coding, tech basics, or digital skills, choose your favorite topics and challenge yourself with quizzes designed to help you learn and grow.
            <br/> Explore, learn, and <span className="font-bold text-3xl leading-normal"><span className="border-b-4 border-b-[#9f77fd]">Level Up</span></span> in your favorite tech fields!
          </p>
          <ButtonLink href={ROUTES.LOGIN} label="Start Now" variant="secondary" width="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Feature4;
