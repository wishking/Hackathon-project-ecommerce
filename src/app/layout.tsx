import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "./components/TopHeader";
import LowerHeader from "./components/LowerHeader";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LowFooter from "./components/LowFooter";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waqar E commerce",
  description: "Waqar E Commerce, Next Generation AI Based E Commerce",
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    
    <html lang="en">
   
   
      <body className={inter.className}>
        
      <TopHeader />
        <LowerHeader />
        <NavBar />
        
        <main>{children}</main>

        <div className="mt-40">
        <Footer/>
        </div>

        <LowFooter/>



        </body>
      
    </html>
  );
}
