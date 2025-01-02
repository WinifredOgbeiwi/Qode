import { QuestionsProps } from "@/app/utils/type";
import React from "react";

const Questions: React.FC<QuestionsProps> = ({
  selectedQuiz,
  shuffledQuestions,
  isQuizCompleted,
  currentQuestionIndex,
  timeRemaining,
  handleOptionClick,
}) => {
  return (
    <>
      {selectedQuiz && shuffledQuestions.length > 0 && !isQuizCompleted && (
        <div className="mb-8 mx-5 ">
          <div className="flex justify-between items-center my-5">
            <h4 className="font-bold">
              {currentQuestionIndex + 1} of {shuffledQuestions.length}
            </h4>
            <h4 className={`w-12 h-12 flex justify-center items-center font-bold rounded-full border-2 border-black p-2 ${timeRemaining < 20 ? "text-red-600" : "text-black"} `}>
              {timeRemaining}
            </h4>
          </div>

          <div>
            <p className="font-extrabold border-[3px] px-2 text-center py-5 text-lg border-black shadow mb-10 ">
              {shuffledQuestions[currentQuestionIndex].questionText}
            </p>
            <ul>
              {shuffledQuestions[currentQuestionIndex].option.map(
                (opt: string, index: number) => (
                  <li
                    className="border-[3px] py-4 w-full px-2 mt-3 text-center cursor-pointer bg-[#FC9CE9] hover:bg-[#e105b5] border-black"
                    key={index}
                    onClick={() => handleOptionClick(opt)} >
                    {opt}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Questions;
