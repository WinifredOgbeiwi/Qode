import { IMAGES, ROUTES } from "@/app/utils/imports";
import Image from "next/image";
import React from "react";
import ButtonLink from "../common/ButtonLink";

const Feature2 = () => {
  return (
    <div className="text-xl px-8 md:px-32 py-10 border-t-4 border-black bg-[#FFC8EB]">
      <div className="md:my-24 flex flex-col md:flex-row justify-between items-center">
        <Image
          src={IMAGES.ImageHolder}
          alt="Image Holder"
          className="border-4 border-black rounded-2xl h-1/3 w-2/3 md:w-1/3"
        />

        <div className="md:w-[50%] mt-10 md:mt-0">
          <h2 className="text-7xl max-[900px]:text-5xl font-bold">LEADERBOARD!</h2>
          <h2 className="max-[900px]:text-2xl text-4xl font-bold mt-4">Climb to the Top!</h2>
          <p className="my-6">
            Think you are a tech genius? Prove it! Our leaderboard tracks the top quiz scorers, so you can see how you stack up against the best in tech.
            <br /> Whether you are competing for the <span className="font-bold text-3xl">#1 spot</span> or improving your own scores, the challenge is on!
          </p>
          <ButtonLink href={ROUTES.LOGIN} label="View Leaderboard" variant="secondary" width="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Feature2;
