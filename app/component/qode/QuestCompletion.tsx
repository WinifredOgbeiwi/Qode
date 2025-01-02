import React from 'react'
import Button from '../common/Button';
import ButtonLink from '../common/ButtonLink';
import { QuestCompletionProp } from '@/app/utils/type';
import { ROUTES } from '@/app/utils/imports';
import CircularProgress from '../common/CircleChart';

const QuestCompletion:React.FC<QuestCompletionProp> = ({isQuizCompleted,score,shuffledQuestions,replayQuiz , reloadPage}) => {
      const totalScore = Math.round((score / shuffledQuestions.length) * 100);
  return (
    <>
             {isQuizCompleted && (
        <div className="text-center">
               <h2 className="text-4xl bg-[#B8FF9F] text-center border-b-2 py-4 border-black font-bold ">
       Qode Result
      </h2>
       
          <div className='py-3 px-5'>
              <div className='flex flex-col justify-center items-center'>
                  <p className="text-4xl mt-4 font-bold">
                    Score: {score} / {shuffledQuestions.length}
                  </p>
                  <CircularProgress value={totalScore}/>
              </div>
              {/* <h3 className="text-3xl font-bold mt-6">Question Review</h3> */}
              {/* <ul className="mt-4">
                {shuffledQuestions.map((question, index) => {
                  const userAnswer = userAnswers.find(
                    (answer) => answer.question === question.questionText
                  );
                  return (
                    <li key={index} className="mb-4">
                      <p className="font-bold">
                        Q{index + 1}: {question.questionText}
                      </p>
                      <p>
                        Your Answer:
                        <span className="font-bold">
                          {userAnswer ? userAnswer.selectedOption : "Not Answered"}
                        </span>
                      </p>
                      <p>
                        Correct Answer:
                        <span className="font-bold">{question.answer}</span>
                      </p>
                      <p className="italic">Explanation: {question.explanation}</p>
                    </li>
                  );
                })}
              </ul> */}
              <div className="flex gap-5 w-full justify-between items-center mb-4">
                <Button onclick={replayQuiz} label="Replay Quiz" variant="primary" color='bg-[#CEE74C]' />
                <Button onclick={reloadPage} label="Start new Quiz" variant="primary" color='bg-[#f582de]' />
              </div>
              <ButtonLink
                href={ROUTES.DASHBOARD}
                label="Go to Dashboard "
                variant="primary"
                width="w-full"
              />
          </div>
        </div>
      )}
    </>
  )
}

export default QuestCompletion