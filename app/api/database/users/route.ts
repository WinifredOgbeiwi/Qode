
import { db } from "@/firebase";
import { NextRequest, NextResponse } from "next/server";
import { doc, setDoc } from "firebase/firestore";
import { AuthDBProps } from "@/app/utils/type";

export const  POST = async(req: NextRequest) =>{
    const { uid, email, firstname,lastname,experience,username }: AuthDBProps = await req.json();
    try {
   await setDoc(doc(db, "users", uid), {
        firstname,
        lastname,
        experience,
        email,
        username,
        quizzTaken:[],
        createdAt: new Date(),
        
      });
     return NextResponse.json({message:"User created successfully", uid}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}




