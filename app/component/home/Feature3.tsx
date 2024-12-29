import { IMAGES, ROUTES } from "@/app/utils/imports";
import Image from "next/image";
import React from "react";
import ButtonLink from "../common/ButtonLink";

const Feature3 = () => {
  return (
    <div className="text-xl px-8 md:px-32 py-10 border-t-4 border-black bg-[#e6c9fe]">
      <div className="md:my-24 flex flex-col md:flex-row-reverse justify-between items-center">
        <Image
          src={IMAGES.ImageHolder}
          alt="Image Holder"
          className="border-4 border-black rounded-2xl h-1/3 w-2/3 md:w-1/3"
        />

        <div className="md:w-[50%] mt-10 md:mt-0">
          <h2 className="text-7xl max-[900px]:text-5xl font-bold">QUIZ HISTORY!</h2>
          <h2 className="max-[900px]:text-2xl text-4xl font-bold mt-4">Track Your Journey!</h2>
          <p className="my-6">
            Want to see how you have been improving? Our Quiz History feature lets you review past quizzes, track your scores, and monitor your performance over time.
            <br /> Keep an eye on your progress and see how much you have learned since you started!
          </p>
          <ButtonLink href={ROUTES.LOGIN} label="View History" variant="secondary" width="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Feature3;
