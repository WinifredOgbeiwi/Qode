import type { Metadata } from "next";

import "./globals.css";
// import Main from "./component/Main";

import { Montserrat_Alternates } from 'next/font/google'

const Montserrat = Montserrat_Alternates({
  subsets: ['latin'],
  weight:"400"
})

export const metadata: Metadata = {
  title: "Qode - Interactive Quiz App ",
  description: "Qode is an engaging and interactive quiz app that challenges your knowledge across a variety of categories. Test your skills, track your progress, and compete for the top score. Start your quiz journey with Qode today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={` ${Montserrat.className}`}>
<h1>lorem</h1>
      <div>{children}</div>
      </body>
    </html>
  );
}
