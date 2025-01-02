import { db } from "@/firebase";
import { NextRequest, NextResponse } from "next/server";
import {
  arrayUnion,
  doc,
  updateDoc,
} from "firebase/firestore";
import { QuizStorage } from "@/app/utils/type";

export const POST = async (req: NextRequest) => {
  const { uid, quizId, score }: QuizStorage = await req.json();
  try {
    await updateDoc(doc(db, "users", uid), {
      quizzesTaken: arrayUnion({
        quizId,
        score,
        timestamp:new Date().toISOString()
      }),
    });
    return NextResponse.json(
      { message: "User created successfully", uid },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
};
