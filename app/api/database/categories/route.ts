
import { db } from "@/firebase";
import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";

export const GET = async () => {
  try {
    const categoriesSnapshot = await getDocs(collection(db, "categories"));
    const categories = categoriesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
};

