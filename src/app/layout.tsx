import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Abhinav Thakur | Full-Stack AI & MERN Developer",
  description: "Explore the interactive portfolio of Abhinav Thakur. Full-stack AI & MERN developer experienced in Next.js, Node.js, Socket.io, WebRTC, and building intelligent real-time applications.",
  keywords: ["Abhinav Thakur", "MERN Developer", "Full-Stack Developer", "Next.js", "Node.js", "Socket.io", "WebRTC", "Software Engineer", "React.js"],
  authors: [{ name: "Abhinav Thakur" }],
  creator: "Abhinav Thakur",
  openGraph: {
    title: "Abhinav Thakur | Full-Stack AI & MERN Developer",
    description: "Full-stack AI and MERN developer building real-time products, AI workflows, and resilient backend systems.",
    type: "website",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Abhinav Thakur portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinav Thakur | Full-Stack AI & MERN Developer",
    description: "Full-stack AI and MERN developer building real-time products, AI workflows, and resilient backend systems.",
    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${poppins.variable}`} style={{ scrollBehavior: "smooth" }}>
      <body style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
