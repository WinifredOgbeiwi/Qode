import { QodeQuizProps } from "@/app/utils/type";
import React from "react";

const QodeQuiz:React.FC<QodeQuizProps> = ({selectedQuiz,shuffledQuestions,isQuizCompleted,currentQuestionIndex,timeRemaining,handleOptionClick}) => {
  return (
    <div>
      {selectedQuiz && shuffledQuestions.length > 0 && !isQuizCompleted && (
        <>
          <h2>
            Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
          </h2>
          <p>Time Remaining: {timeRemaining} seconds</p>
          <div>
            <p className="font-bold">
              {shuffledQuestions[currentQuestionIndex].questionText}
            </p>
            <ul>
              {shuffledQuestions[currentQuestionIndex].option.map(
                (opt: string, index: number) => (
                  <li
                    className="border-2 py-4 w-full px-2 hover:bg-color-primary3 bg-color-primary6 text-center cursor-pointer"
                    key={index}
                    onClick={() => handleOptionClick(opt)}
                  >
                    {opt}
                  </li>
                )
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default QodeQuiz