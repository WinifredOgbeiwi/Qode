import type { Metadata } from "next";
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";

export const metadata: Metadata = {
  title: "Qode - Interactive Quiz App ",
  description:
    "Qode is an engaging and interactive quiz app that challenges your knowledge across a variety of categories. Test your skills, track your progress, and compete for the top score. Start your quiz journey with Qode today!",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className={` flex flex-col min-h-screen`}>
        <Header/>
        <main className="flex-1 h-full bg-[#f8f5ff]">{children}</main>
        <Footer />
      </div>

  );
}
