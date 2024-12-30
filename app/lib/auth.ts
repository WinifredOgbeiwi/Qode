import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AuthProps } from "../utils/type";
import { auth } from "@/firebase";
import { useState } from "react";

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
