import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "shwetaRoy",
  description: "Dev portfolio of shwetaRoy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black-100 overflow-x-hidden">
      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
