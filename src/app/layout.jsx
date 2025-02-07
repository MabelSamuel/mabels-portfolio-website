import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mabel Samuel",
  description: "Mabel Samuel's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Navbar/>
      {children}
      </body>
    </html>
  );
}
