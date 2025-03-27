import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Funds AI",
  description: "Invest in AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} bg-[#fdfdfd] text-gray-950`}>
        {children}
      </body>
    </html>
  );
}
