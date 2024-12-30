import Image from "next/image";
import { IMAGES } from "../utils/imports";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="h-screen overflow-x-hidden bg-[#f8f5ff]">
      <div className="md:flex gap-20 h-full w-full overflow-x-hidden relative">
        <div className="pt-10 px-10 md:px-20 w-full z-50 relative">
          <Image src={IMAGES.Logo} alt="Qode Logo" className="w-36 " />
          <main className=" w-full md:max-w-md mt-5 z-50">{children}</main>
        </div>
         <Image
              src={IMAGES.Auth_BG}
              alt="auth-holder"
              className="object-cover block md:hidden  -top-[20rem] absolute "
            />
        <div className="auth-bg h-fit md:-right-[45rem] md:absolute w-[100%] hidden md:block overflow-hidden">
          <div className="h-full w-2/3 hidden md:block">
            <Image
              src={IMAGES.Auth_Placeholder}
              alt="auth-holder"
              className="object-cover w-full"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
