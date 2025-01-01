"use client"
import { IMAGES } from "@/app/utils/imports";
import { QodeTypeProps } from "@/app/utils/type";
import Image from "next/image";
import React, { useState } from "react";

const Type: React.FC<QodeTypeProps> = ({
  selectedCategory,
  selectedQuiz,
  isQuizCompleted,
  categoryName,
  quizzes,
  setQuestions,
  setQuizId,
}) => {
      const [hover, setHover] = useState(null);
  return (
    <div>
      {selectedCategory && !selectedQuiz && !isQuizCompleted && (
        <>
          <h2 className="text-4xl bg-[#B8FF9F] text-center border-b-2 py-4 border-black font-bold ">
            Learning or Racing? <br/> Choose Your Mode!
          </h2>
          <h4 className="text-center capitalize">{categoryName} Quizzes</h4>
          <ul className="flex justify-center items-center flex-wrap gap-6">
            {quizzes.map((quiz) => (

               <button
            onClick={() => {
           setQuestions(selectedCategory, quiz.id);
           setQuizId(quiz.id);
            }}
            key={quiz.id}
            onMouseEnter={() => setHover(quiz.id)}
            onMouseLeave={() => setHover(null)}
            className={` ${
              hover === quiz.id ? "bg-[#F193DD] " : "bg-black"
            } inline-block rounded-sm text-center border-black border transition-all duration-300 text-lg font-semibold w-52 h-52`}
          >
            <span
              className={`rounded-sm block -translate-x-[0.2rem] -translate-y-[0.2rem] border border-black transition-all duration-300 h-52 ${
                hover === quiz.id ? "bg-[#FFC8E6] border-black" : ""
              }`}
            >
              <span
                className={`${
                  hover === quiz.id ? "-translate-x-[0.2rem] -translate-y-[0.2rem]" : ""
                } px-5 py-3 border-2 text-2xl border-black capitalize transition-all duration-300 bg-[#FC9CE9] h-52 flex flex-col justify-center items-center gap-3 `}
              >
                <Image src={IMAGES.DB} alt="db" className="w-20" />
                {quiz.name}
              </span>
            </span>
          </button>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Type;
