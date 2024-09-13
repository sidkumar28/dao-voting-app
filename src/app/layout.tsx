import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DAO",
  description: "App to cast your vote through Ethereum",
  icons: {
    icon: "/images/logo.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-[#181D47] via-[#243465] to-[#2A174F] min-h-screen`}>
        
        <div className="flex flex-col min-h-screen relative z-0">
          <Header />
          <main className="flex-grow flex flex-col justify-center items-center w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
