import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhinav Thakur | Full-Stack MERN Developer",
  description: "Explore the interactive portfolio of Abhinav Thakur. Full-stack MERN developer experienced in Next.js, Node.js, Socket.io, WebRTC, and building secure real-time web applications.",
  keywords: ["Abhinav Thakur", "MERN Developer", "Full-Stack Developer", "Next.js", "Node.js", "Socket.io", "WebRTC", "Software Engineer", "React.js"],
  authors: [{ name: "Abhinav Thakur" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakartaSans.variable}`} style={{ scrollBehavior: "smooth" }}>
      <body style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif" }}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
