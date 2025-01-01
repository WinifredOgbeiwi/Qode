"use client";

import { useAuthListener } from "@/app/lib/auth";
import { ROUTES } from "@/app/utils/imports";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";


const Main = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const authLoading = useAuthListener();

  const user = useAuthStore((state) => state.user);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (
      !authLoading &&
      !user &&
      pathname !== ROUTES.HOME &&
      pathname !== ROUTES.LOGIN &&
      pathname !== ROUTES.REGISTER &&
      pathname !== ROUTES.RESET_PASSWORD &&
      pathname !== ROUTES.VERIFY_EMAIL
    ) {
      router.push(ROUTES.LOGIN);
    }
  }, [authLoading, user, pathname, router]);

  //if (authLoading) return <h1>Loading ...</h1>; 
  
  return <div>{children}</div>;
};


export default Main;
