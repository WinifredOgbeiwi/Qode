
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchCategories = async () => {
  const categoriesSnapshot = await getDocs(collection(db, "categories"));
  return categoriesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const fetchQuizzes = async (categoryId: string) => {
  const quizzesSnapshot = await getDocs(collection(db, `categories/${categoryId}/quizzes`));
  return quizzesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const fetchQuestions = async (categoryId: string, quizId: string) => {
  const questionsSnapshot = await getDocs(
    collection(db, `categories/${categoryId}/quizzes/${quizId}/questions`)
  );
  return questionsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
