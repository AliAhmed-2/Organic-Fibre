import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "../../Components/Footer";
import WhatsAppButton from "../../Components/WhatsAppButton";

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
    "Manufacturer of high-efficiency banana fiber extraction machines, genuine spare parts, and premium biodegradable products (raw fiber, pulp, paper, vegan leather, tableware, and textiles).",
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
        <WhatsAppButton />
        <div className="gtranslate_wrapper fixed bottom-4 left-4 z-30 rounded-full bg-white px-3 py-1.5 shadow-lg border border-gray-200 text-sm font-semibold text-gray-800"></div>
        <Script id="gtranslate-settings" strategy="afterInteractive">
          {`window.gtranslateSettings = {
            default_language: "en",
            languages: ["en", "ur", "bn", "id", "de", "hi", "tl", "ja", "es"],
            native_language_names: true,
            wrapper_selector: ".gtranslate_wrapper",
            flag_style: "3d"
          };`}
        </Script>
        <Script src="https://cdn.gtranslate.net/widgets/latest/popup.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
