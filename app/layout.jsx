import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ActiveSectionProvider } from "@/app/context/ActiveSectionContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AhtshamEh - Welcome to my Portfolio",
  description:
    "Portfolio of Ahtsham, a Full Stack Web Developer specializing in React, Next.js, Node.js, and Tailwind CSS.",
icons: {
  icon: "/profile.png",
},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://cdn.lordicon.com/ritcuqlt.js"
          strategy="beforeInteractive"
        />
        <ActiveSectionProvider>{children}</ActiveSectionProvider>
      </body>
    </html>
  );
}