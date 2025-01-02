
import { fetchQuestions, fetchQuizzes } from "@/app/lib/database";
import { QodeState } from "@/app/utils/type";
import axios from "axios";
import {create} from "zustand";



export const useQodeStore = create<QodeState>((set) => ({
  categories: [],
  quizzes: [],
  questions: [],
  selectedCategory: null,
  selectedQuiz: null,
  setCategories: async () => {
    try {
      const res = await axios.get("/api/database/categories");
    set({ categories:res.data });
    } catch (error) {
      
    }
  },
  setQuizzes: async (categoryId) => {
    const quizzes = await fetchQuizzes(categoryId);
    set({ quizzes, selectedCategory: categoryId });
  },
  setQuestions: async (categoryId, quizId) => {
    const questions = await fetchQuestions(categoryId, quizId);
    set({ questions, selectedQuiz: quizId });
  },
}));

