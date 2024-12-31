// lib/auth.ts
"use client"
import { auth } from '@/firebase';
import { useAuthStore } from '@/store/useAuthStore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, sendPasswordResetEmail, sendEmailVerification } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { AuthProps } from '../utils/type';

// register function
export const register = async ({email, password, fullname}:AuthProps) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password); 
    await updateProfile(userCredential.user, {
      displayName: fullname,
    });
  await sendEmailVerification(userCredential.user)
       return userCredential.user.uid;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred during registration.");
    }
  }
};

// Login function
export const login = async ({ email, password }: AuthProps) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const accessToken = await res.user.getIdToken();
    localStorage.setItem("accessToken", accessToken);
    return res; // Return the response
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred during login.");
    }
    return null; 
  }
};


export const useAuthListener = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        user.getIdToken(true).then((accessToken) => {
          localStorage.setItem("accessToken", accessToken);
        });
      } else {
        setUser(null);
        localStorage.removeItem("accessToken");
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, [setUser]);

  return authLoading;
};




//forgot password
export const forgotpassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred during forgot-password.");
    }
  }
};