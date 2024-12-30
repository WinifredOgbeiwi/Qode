import Image from "next/image";
import { IMAGES } from "../utils/imports";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="h-screen overflow-x-hidden bg-[#f8f5ff]">
      <div className="flex gap-20 h-full w-full overflow-x-hidden relative">
        <div className="pt-10 px-20 z-50 w-full">
          <Image src={IMAGES.Logo} alt="Qode Logo" className="w-36 " />
          <main className="max-w-md mt-5">{children}</main>
        </div>
        <div className="auth-bg h-fit -right-[45rem] absolute w-[100%] overflow-hidden">
          <div className="h-full w-2/3 ">
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
