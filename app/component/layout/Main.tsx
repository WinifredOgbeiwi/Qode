"use client";

import { useAuthListener } from "@/app/lib/auth";
import { ROUTES } from "@/app/utils/imports";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Main = ({ children }: { children: React.ReactNode }) => {
  const authLoading = useAuthListener();
  const user = useAuthStore((state) => state.user);
  const pathname = usePathname();
  const router = useRouter();

  const [hasNotified, setHasNotified] = useState(false);

  const isPublicRoute = [
    ROUTES.HOME,
    ROUTES.LOGIN,
    ROUTES.REGISTER,
    ROUTES.RESET_PASSWORD,
    ROUTES.VERIFY_EMAIL,
  ].includes(pathname);

  useEffect(() => {
    if (!authLoading && !user && !isPublicRoute) {
      router.replace(ROUTES.LOGIN);

      if (!hasNotified) {
        toast.error("Please login", {
          position: "top-right",
          style: {
            backgroundColor: "white",
            color: "#c60606",
            border: "2px double black",
          },
        });
        setHasNotified(true);
      }
    }
  }, [authLoading, user, pathname, isPublicRoute, router, hasNotified]);

  if (authLoading || (!user && !isPublicRoute)) {
    return null;
  }

  return <div>{children}</div>;
};

export default Main;
