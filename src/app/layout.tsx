import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mabel Samuel | Software Engineer & QA Tester",
  description: "Mabel Samuel's Portfolio",
  keywords: [
    "Mabel Samuel",
    "Software Engineer",
    "Frontend Developer",
    "Fullstack Developer",
    "Next.js Developer",
    "React Developer",
    "Django Developer",
    "Portfolio",
    "Web Developer Nigeria",
    "QA Tester",
    "QA Engineer",
  ],
  authors: [{ name: "Mabel Samuel" }],
  icons: {
    icon: "/android-chrome-192x192.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="zjakqF6ateJYYTHemk9ZeQ"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${poppins.variable} text-text font-poppins antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
