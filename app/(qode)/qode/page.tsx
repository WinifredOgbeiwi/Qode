"use client"
import Category from '@/app/component/qode/Category'
import { useQodeStore } from '@/store/qodeStore';
import { useAuthStore } from '@/store/useAuthStore';
import React, { useEffect, useState } from 'react'

const Qodepage = () => {
    const { user } = useAuthStore((state) => state);

    const {
    categories,
    setQuizzes,
    selectedCategory,
    setCategories
  } = useQodeStore();

    const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
      const [categoryName, setCategoryName] = useState<string>("");

        useEffect(() => {
    if (user) setCategories();
  }, [setCategories, user]);

  return (
    <div>
           
      <Category selectedCategory={selectedCategory} isQuizCompleted={isQuizCompleted} categories ={categories}setQuizzes={setQuizzes} setCategoryName={setCategoryName} />
     
    </div>
  )
}

export default Qodepage