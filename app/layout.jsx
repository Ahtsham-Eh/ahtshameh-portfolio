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
  title: "AhtshamEh",
  description:
    "Portfolio of AhtshamEh, Professional Video Editor | Showcasing cinematic storytelling, social media content creation, motion graphics, and creative post-production. Explore professional short-form and long-form videos optimized for YouTube, TikTok, and Instagram..",
  icons: {
    icon: "/toji.png",
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