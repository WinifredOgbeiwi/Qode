import React from "react";
import ButtonLink from "../common/ButtonLink";

const Hero = () => {
  return (
    <div className="text-center md:w-1/2 w-full m-auto ">
      <h1 className="text-6xl md:text-7xl mx-3 leading-tight font-extrabold">
        Test Your Knowledge,
        <br />
        Challenge Your Mind!
      </h1>
      <p className="my-5 text-xl ">
        Join the fun and put your skills to the test with our interactive
        quizzes on various topics. Whether you&#39;re a trivia enthusiast or just
        looking to learn something new, we have a quiz for you!
      </p>
      <ButtonLink href="" label="Get Started" variant="primary" width="w-2/3" />
    </div>
  );
};

export default Hero;
