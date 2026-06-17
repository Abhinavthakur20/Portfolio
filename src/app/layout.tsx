import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhinav Thakur | Full-Stack MERN Developer",
  description: "Explore the interactive portfolio of Abhinav Thakur. Full-stack MERN developer experienced in Next.js, Node.js, Socket.io, WebRTC, and building secure real-time web applications.",
  keywords: ["Abhinav Thakur", "MERN Developer", "Full-Stack Developer", "Next.js", "Socket.io", "WebRTC", "Software Engineer", "React.js"],
  authors: [{ name: "Abhinav Thakur" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${playfairDisplay.variable}`} style={{ scrollBehavior: "smooth" }}>
      <body style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif" }}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
