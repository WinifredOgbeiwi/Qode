"use client";
import { shuffleArray } from "@/app/component/common/Shuffle";
import Category from "@/app/component/qode/Category";
import Questions from "@/app/component/qode/Questions";
import Type from "@/app/component/qode/Type";
import { QuestionsType, UserAnswer } from "@/app/utils/type";
import { useQodeStore } from "@/store/qodeStore";
import { useAuthStore } from "@/store/useAuthStore";
import React, { useEffect, useState } from "react";

const Qodepage = () => {
  const { user } = useAuthStore((state) => state);

  const {
    categories,
    setQuizzes,
    selectedCategory,
    setCategories,
    selectedQuiz,
    questions,
    quizzes,
    setQuestions,
  } = useQodeStore();

  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [categoryName, setCategoryName] = useState<string>("");
  const [shuffledQuestions, setShuffledQuestions] = useState<QuestionsType[]>(
    []
  );
  const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(20);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [quizId, setQuizId] = useState<number | null>(null);
  
  useEffect(() => {
    if (user) setCategories();
  }, [setCategories, user]);

  useEffect(() => {
    if (selectedCategory && selectedQuiz) {
      const shuffledQuestions = shuffleArray(questions).map((question) => ({
        ...question,
        option: shuffleArray(question.option),
      }));
      setShuffledQuestions(shuffledQuestions);
      setIsQuizStarted(true);
    }
  }, [selectedCategory, selectedQuiz, questions]);

  const handleOptionClick = (selectedOption: string) => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        question: currentQuestion.questionText,
        selectedOption,
        answer: currentQuestion.answer,
        explanation: currentQuestion.explanation,
      },
    ]);

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };
  
  //   useEffect(() => {
  //   if (!isQuizStarted || isQuizCompleted) return; 
  //   if (timeRemaining <= 0) {
  //     setIsQuizCompleted(true);
  //     return;
  //   }

  //   const timerId = setInterval(() => {
  //     setTimeRemaining((prevTime) => prevTime - 1);
  //   }, 1000);

  //   return () => clearInterval(timerId);
  // }, [isQuizStarted, isQuizCompleted, timeRemaining]);

  return (
    <div>
      <Category
        selectedCategory={selectedCategory}
        isQuizCompleted={isQuizCompleted}
        categories={categories}
        setQuizzes={setQuizzes}
        setCategoryName={setCategoryName}
      />
      <Type
        selectedCategory={selectedCategory}
        selectedQuiz={selectedQuiz}
        isQuizCompleted={isQuizCompleted}
        categoryName={categoryName}
        quizzes={quizzes}
        setQuestions={setQuestions}
        setQuizId={setQuizId}
      />
      <Questions
        selectedQuiz={selectedQuiz}
        shuffledQuestions={shuffledQuestions}
        isQuizCompleted={isQuizCompleted}
        currentQuestionIndex={currentQuestionIndex}
        timeRemaining={timeRemaining}
        handleOptionClick={handleOptionClick}
      />
    </div>
  );
};

export default Qodepage;
