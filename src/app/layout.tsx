import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Frichebox - Faster Storage. Smarter Supply.",
  description: "Frichebox delivers secure, high-speed storage and logistics infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#060814] text-white font-sans">
        {/* Premium radial gradient glow backdrop */}
        <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-950/40 via-[#060814] to-[#04050d] pointer-events-none" />
        
        {/* Glow accent lights */}
        <div className="fixed top-[-10%] right-[5%] w-[450px] h-[450px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
        <div className="fixed bottom-[10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />

        <Header />
        
        <div className="relative z-10 flex flex-col flex-1">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}

