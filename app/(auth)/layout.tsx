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
        <div className=" p-20 z-50">
          <Image src={IMAGES.Logo} alt="Qode Logo" className="w-44 " />
          <main className="max-w-xl mt-10">{children}</main>
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
