import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";
import { icons } from "lucide-react";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mabel Samuel",
  description: "Mabel Samuel's Portfolio",
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
      <body
        className={`${poppins.variable} text-text font-poppins antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
