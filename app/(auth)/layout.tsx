"use client";
import Image from "next/image";
import { IMAGES, ROUTES } from "../utils/imports";
import { usePathname } from "next/navigation";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const route = usePathname();
  const left = [ROUTES.REGISTER, ROUTES.VERIFY_EMAIL];
  return (
    <div
      className={`flex flex-col relative   ${
        left.includes(route) ? "md:flex-row" : "md:flex-row-reverse"
      } min-h-screen`}
    >
      <div className="md:flex hidden rounded-b-full md:rounded-none flex-col items-center justify-center bg-primary w-full md:w-[50%] overflow-hidden ">
        <Image
          src={IMAGES.Auth_BG}
          alt="Logo"
          className="absolute -z-10 -right-[20rem] w-[55rem] -top-56"
        />
        <Image
          src={IMAGES.Auth_Placeholder}
          alt="Logo"
          className="absolute -right-[15rem] w-[46rem] -top-14 object-cover "
        />
      </div>
      <div className=" md:hidden overflow-hidden"> 
                <Image
          src={IMAGES.Auth_BG}
          alt="Logo"
          className="absolute -z-10 -left-[10rem] w-[50rem] -top-[20rem] rotate-[270deg]"
        />
      </div>
 
      <div className="w-[90%] m-auto md:justify-start md:w-[38%]">
    <Image
          src={IMAGES.Logo}
          alt="Logo"
         className="w-28"
        />
             <main >
        {children}
      </main>
      </div>
 
    </div>
  );
};

export default AuthLayout;



    // <div className="h-full overflow-x-hidden bg-[#f8f5ff]">
    //   <div className="md:flex gap-20 h-full w-full overflow-x-hidden relative">
    //     <div className="pt-10 px-10 md:px-20 w-full h-full z-50 relative">
    //       <main className=" w-full md:max-w-md mt-5 z-50">{children}</main>
    //     </div>
    //      <Image
    //           src={IMAGES.Auth_BG}
    //           alt="auth-holder"
    //           className="object-cover block md:hidden  -top-[20rem] absolute "
    //         />
    //     <div className="auth-bg h-fit md:-right-[45rem] md:absolute w-[100%] hidden md:block overflow-hidden">
    //       <div className="h-full w-2/3 hidden md:block">
    //         <Image
    //           src={IMAGES.Auth_Placeholder}
    //           alt="auth-holder"
    //           className="object-cover w-full"
    //         />
            
    //       </div>
    //     </div>
    //   </div>
    // </div>