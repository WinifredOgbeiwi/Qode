"use client";
import Button from "@/app/component/common/Button";
import ButtonLink from "@/app/component/common/ButtonLink";
import { IMAGES, ROUTES } from "@/app/utils/imports";
import { useAuthStore } from "@/store/useAuthStore";
import { sendEmailVerification } from "firebase/auth";
import Image from "next/image";

const VerifyEmailPage = () => {
  const user = useAuthStore((state) => state.user);
  const resendEmail = () => {
    if (user) {
    sendEmailVerification(user);
  } else {
    console.error("No user is logged in");
  }
  };

  return (
    <section className=" border-2 border-black mt-5">
      <h2 className="text-4xl bg-[#B8FF9F] font-bold text-center mb-5 border-b-2 py-2 border-black">
        Verify Your Email Address
      </h2>

      <div className="px-5">
        <p className="my-2">
          Thank you for signing up to
          <span>
            <Image
              src={IMAGES.Logo}
              alt="qode-logo"
              className="inline-block w-16 ml-1"
            />
          </span>
        </p>
        <p className="my-2">
        
          We have sent a verification email to
          {user?.email}. Please follow the instruction to complete your
          registration
        </p>
        <p className=" my-4">
          If you don&#39;t see the email within a few minutes:
        </p>
        <ul>
          <li className=" list-disc my-1 list-inside ml-3">Check your spam or junk folder.</li>
          <li className=" list-disc my-1 list-inside ml-3">
            Ensure that you entered a valid email address.
          </li>
        </ul>
    <div className="flex justify-center my-5 w-full ">
  <Button label="Still having trouble?" variant="primary" color="bg-[#FF9EFF] py-1"/>
    </div>
        
          <div className="flex justify-between">
            <span onClick={resendEmail} className="text-[#] border-b-2 border-b-transparent hover:border-b-2 hover:border-[#FF9EFF] hover:cursor-pointer"> Resend Email
            </span>
            <span>
              <a
                href="mailto:winnigwithwynny@gmail.com"
                className="text-[#] border-b-2 border-b-transparent hover:border-b-2 hover:border-[#FF9EFF] "
              > Contact Support
              </a>
            </span>
          </div>
        <ButtonLink
          label="Login"
          variant="primary"
          width="w-full mt-3 mb-4"
          href={ROUTES.LOGIN}
        />
      </div>
    </section>
  );
};

export default VerifyEmailPage;
