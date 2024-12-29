import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
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
      <body className={`${lato.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1 h-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
