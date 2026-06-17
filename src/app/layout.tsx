import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creative 3D Portfolio | Next.js & WebGL Developer",
  description: "Explore an interactive 3D portfolio featuring immersive WebGL experiences, modern design, sleek glassmorphism, and responsive UI components. Built with Next.js, Three.js, and Vanilla CSS.",
  keywords: ["Next.js", "Three.js", "React Three Fiber", "3D Portfolio", "WebGL", "Creative Developer", "TypeScript"],
  authors: [{ name: "Creative Developer" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} style={{ scrollBehavior: "smooth" }}>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
