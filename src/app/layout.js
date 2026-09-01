import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../../Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Organic Fiber | Banana Fiber Extraction Machines & Eco-Sustainable Products",
  description:
    "Leading manufacturer of high-efficiency banana fiber extraction machines, genuine spare parts, and premium biodegradable products (raw fiber, pulp, paper, vegan leather, tableware, and textiles).",
  keywords: [
    "Banana Fiber",
    "Banana Fiber Extraction Machine",
    "Eco Friendly Products",
    "Natural Fiber Textiles",
    "Sustainable Packaging",
    "Banana Paper",
    "Vegan Leather",
    "Biodegradable Plates"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col justify-between`}
      >
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
