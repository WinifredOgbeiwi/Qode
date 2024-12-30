import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthProps } from "../utils/type";
import { auth } from "@/firebase";

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
    return null; // Return null on failure
  }
};
