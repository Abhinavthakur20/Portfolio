import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhinav Thakur | Full-Stack AI & MERN Developer",
  description: "Explore the interactive portfolio of Abhinav Thakur. Full-stack AI & MERN developer experienced in Next.js, Node.js, Socket.io, WebRTC, and building intelligent real-time applications.",
  keywords: ["Abhinav Thakur", "MERN Developer", "Full-Stack Developer", "Next.js", "Node.js", "Socket.io", "WebRTC", "Software Engineer", "React.js"],
  authors: [{ name: "Abhinav Thakur" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${poppins.variable}`} style={{ scrollBehavior: "smooth" }}>
      <body style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
