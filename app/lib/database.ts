
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { QuestionsType } from "../utils/type";

export const fetchCategories = async () => {
  const categoriesSnapshot = await getDocs(collection(db, "categories"));
  return categoriesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const fetchQuizzes = async (categoryId: string) => {
  const quizzesSnapshot = await getDocs(collection(db, `categories/${categoryId}/quizzes`));
  return quizzesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const fetchQuestions = async (
  categoryId: string,
  quizId: string
): Promise<QuestionsType[]> => {
  const questionsSnapshot = await getDocs(
    collection(db, `categories/${categoryId}/quizzes/${quizId}/questions`)
  );

  return questionsSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      questionText: data.questionText || "Default question text",
      option: data.option || ["Option 1", "Option 2", "Option 3", "Option 4"],
      answer: data.answer || "Option 1",
      explanation: data.explanation || "Default explanation",
    } as QuestionsType;
  });
};