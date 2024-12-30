import type { Metadata } from "next";
import "./globals.css";
import { Host_Grotesk } from "next/font/google";

const grotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["400","600","800"],
});

export const metadata: Metadata = {
  title: "Qode - Interactive Quiz App ",
  description:
    "Qode is an engaging and interactive quiz app that challenges your knowledge across a variety of categories. Test your skills, track your progress, and compete for the top score. Start your quiz journey with Qode today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body
    className={`${grotesk.className} max-w-screen-2xl h-screen mx-auto bg-[#f8f5ff] `}>
        <main>{children}</main>
      </body>
    </html>
  );
}
